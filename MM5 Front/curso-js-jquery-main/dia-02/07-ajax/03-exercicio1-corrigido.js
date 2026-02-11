$(document).ready(function() {

	// URL base da API
	const API_URL = "https://jsonplaceholder.typicode.com";

	function showFeedback(message, type = "success") {
		const $feedback = $("#feedback");
		$feedback
			.text(message)
			.css(
				"background-color",
				type === "success" ? "#e6ffe6" : "#ffdddd"
			)
			.css("color", type === "success" ? "#007e00" : "#dc3545")
			.fadeIn(400)
			.delay(3000)
			.fadeOut(400);
	}

	// Limpa o formulário e reseta o modo de edição
	function resetForm() {
		$("#post-form")[0].reset();
		$("#postId").val("");
		$("#btnSubmitPost")
			.removeClass("btn-update")
			.addClass("btn-create")
			.text("Criar Post");
	}

	$("#btnReset").click(function (e) {
		resetForm();
	});

	// --- FUNÇÕES DE CRUD (POSTS) ---

	// Carrega e exibe todos os posts
	function fetchPosts() {
		$.get(`${API_URL}/posts?_limit=10`, function (data) {
			renderPosts(data);
		}).fail(function () {
			$("#posts-list").html("<p>Erro ao carregar posts.</p>");
		});
	}

	// Renderiza a lista de posts
	function renderPosts(posts) {
		const $list = $("#posts-list");
		$list.empty();
		if (posts.length === 0) {
			$list.html("<p>Nenhum post encontrado.</p>");
			return;
		}

		posts.forEach((post) => {
			const $item = $(`
						<div class="post-item" data-id="${post.id}">
							<div class="post-title">${post.id}. ${post.title}</div>
								<p>${post.body.substring(0, 100)}...</p>
								<button class="btn-action btn-edit" data-id="${post.id}">Editar</button>
								<button class="btn-action btn-delete" data-id="${post.id}">Excluir</button>
								<button class="btn-action btn-view-comments" data-id="${post.id}">Ver Comentários</button>
							</div>
						`);
			$list.append($item);
		});
	}

	// Lidar com o envio do formulário
	$("#post-form").submit(function (e) {
		e.preventDefault();

		const title = $("#postTitle").val();
		const body = $("#postBody").val();
		const id = $("#postId").val();

		// Objeto de dados (UserId fixo para a API)
		const postData = { title: title, body: body, userId: 1 };

		if (id) {
			editPost(postData);
		} else {
			createPost(postData);
		}
	});

	// Cadastra um novo post
	function createPost(postData) {
		$.post(`${API_URL}/posts`, postData, function (response) {
			showFeedback(`Post criado com sucesso! Novo ID: ${response.id}`);
			resetForm();
			fetchPosts();
		}).fail(function () {
			showFeedback("Erro ao criar post.", "error");
		});
	}

	function editPost(postData) {
		$.ajax({
			url: `${API_URL}/posts/${postData.userId}`,
			method: "PUT",
			data: postData,
			success: function (response) {
				showFeedback(`Post ${postData.userId} atualizado com sucesso! (ID da API: ${response.userId})`);
				resetForm();
				fetchPosts();
			},
			error: function () {
				showFeedback(
					"Erro ao atualizar post.",
					"error"
				);
			},
		});
	}

	// Carregar dados do post no formulário
	$("#posts-list").on("click", ".btn-edit", function () {
		const postId = $(this).data("id");

		// 1. Muda o estado do formulário
		$("#btnSubmitPost")
			.removeClass("btn-create")
			.addClass("btn-update")
			.text("Atualizar Post");

		// 2. Busca o post específico
		$.get(`${API_URL}/posts/${postId}`, function (post) {
			$("#postId").val(post.id);
			$("#postTitle").val(post.title);
			$("#postBody").val(post.body);
		}).fail(function () {
			showFeedback(
				"Erro ao carregar dados do post para edição.",
				"error"
			);
		});
	});

	// Excluir um post
	$("#posts-list").on("click", ".btn-delete", function () {
		const postId = $(this).data("id");
		if (confirm(`Tem certeza que deseja excluir o Post ${postId}?`)) {
			$.ajax({
				url: `${API_URL}/posts/${postId}`,
				method: "DELETE",
				success: function () {
					showFeedback(`Post ${postId} excluído com sucesso!`);
					// Remove o item da lista visualmente
					$(`.post-item[data-id="${postId}"]`).remove();
					$("#comments-display").html(
						"<p>Comentários limpos após a exclusão.</p>"
					);
				},
				error: function () {
					showFeedback("Erro ao excluir post.", "error");
				},
			});
		}
	});


	// // --- FUNÇÕES DE COMENTÁRIOS ---

	//  Carregar comentários para um post específico
	$("#posts-list").on("click", ".btn-view-comments", function () {
		const postId = $(this).data("id");
		const $display = $("#comments-display");

		$.get(`${API_URL}/posts/${postId}/comments`, function (comments) {
			$display.empty();
			$display.append(
				`<h3>Comentários para o Post ${postId} (${comments.length})</h3>`
			);

			if (comments.length === 0) {
				$display.append("<p>Nenhum comentário encontrado.</p>");
				return;
			}

			comments.forEach((comment) => {
				const $commentItem = $(`
							<div class="comment-item">
								<strong>De: ${comment.email}</strong>
								<p>${comment.body}</p>
							</div>
						`);
				$display.append($commentItem);
			});
		}).fail(function () {
			$display.html("<p>Erro ao carregar comentários.</p>");
		});
	});

	// --- INICIALIZAÇÃO ---
	// Carrega os posts quando a página estiver pronta
	fetchPosts();
});