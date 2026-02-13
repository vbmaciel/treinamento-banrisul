using PseudoFramework.ClienteUtils;
using PseudoFramework.SharedUtils;
using System;
using System.Diagnostics;

namespace Cliente
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var caminhoServidorHttp = ConectorHttp.ObterCaminho(3120);

            var servidor = new ServidorBootstrapClienteHttp(
                caminhoServidorHttp,
                ConectorHttpStaticFiles.ObterCaminho(),
                ConectorHttpStaticFiles.ObterNomeArquivo()
            );

            Console.WriteLine("::::::::::::::::::::::::::::::::::::");
            Console.WriteLine($":::: {ServidorBootstrapClienteHttp.IDENTIFICADOR} ::::");
            Console.WriteLine("::::::::::::::::::::::::::::::::::::\n");

            Console.WriteLine("Pressione ENTER para encerrar...\n");
            
            servidor.Iniciar();

            AbrirBrowser(caminhoServidorHttp);

            Console.ReadKey();

            servidor.Encerrar();

            Console.ReadKey();
        }

        private static void AbrirBrowser(string caminhoServidorHttp)
        {
            try
            {
                Process.Start(
                    new ProcessStartInfo
                    {
                        FileName = caminhoServidorHttp,
                        UseShellExecute = true
                    }
                );
            }
            catch
            {
                Console.WriteLine($"Abra manualmente no endereço: {caminhoServidorHttp}");
            }
        }

        // private static void ExibirMenuPrincipal()
        // {
        //     Console.WriteLine("1 - Exemplos");
        //     Console.WriteLine("2 - Idiomas");
        //     Console.WriteLine("3 - Categorias");
        //     Console.WriteLine("S - Sair");
        // }

        // private static string ObterOpcaoTela()
        // {
        //     Console.Write("Selecione a Tela: ");

        //     return Console.ReadLine().Trim().ToUpper();
        // }

        // private static void ExecutarTela(string opcaoTela, ClienteHttp cliente)
        // {
        //     Tela tela;

        //     switch (opcaoTela)
        //     {
        //         case "1":
        //             {
        //                 tela = new TelaExemplos(cliente);
        //                 break;
        //             }
        //         case "2":
        //             {
        //                 tela = new TelaIdiomas(cliente);
        //                 break;
        //             }
        //         case "3":
        //             {
        //                 tela = new TelaCategorias(cliente);
        //                 break;
        //             }
        //         default:
        //             {
        //                 Console.WriteLine("Tela não existe.");
        //                 Console.WriteLine();

        //                 return;
        //             }
        //     }

        //     while (true)
        //     {
        //         tela.ExibirOpcoes();

        //         var opcao = tela.ObterOpcao();

        //         Console.WriteLine();

        //         if (opcao == "S")
        //             break;

        //         tela.ExecutarOpcao(opcao);
        //     }
        // }
    }
}
