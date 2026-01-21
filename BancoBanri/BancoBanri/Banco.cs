using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BancoBanri
{
    class Banco
    {
        public List<Cliente> Clientes { get; private set; }
        public List<Conta> Contas { get; private set; }


        public void CadastroCliente(Cliente cliente, string nome, int cpf)
        {
            cliente = new Cliente(nome, cpf);
            if(cliente != null)
            {
                Console.WriteLine("Cliente criado com sucesso");
            }
        }

        public void CadastroConta(Cliente cliente, int numero)
        {
            cliente.Contas.Add(new Conta(numero));
        }

        public void ListarClientes()
        {
            foreach(Cliente cliente in Clientes)
            {
                Console.WriteLine($"Cliente: {cliente}");
                Console.WriteLine($"Contas: ");
                foreach (Conta conta in cliente.Contas)
                {
                    Console.WriteLine($"Número: {conta.Numero}");
                }
            }
        }
    }
}
