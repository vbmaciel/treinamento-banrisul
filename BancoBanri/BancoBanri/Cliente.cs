using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BancoBanri
{
    class Cliente
    {
        public string Nome { get; set; }
        public int Cpf { get; private set; }
        public List<Conta> Contas { get; set; }

        public Cliente(string nome, int cpf)
        {
            Nome = nome;
            Cpf = cpf;
            Contas = new List<Conta>();
        }

        

    }
}
