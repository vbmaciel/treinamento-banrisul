using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BancoBanri
{
    public class ContaCorrente : Conta
    {
        public int Saldo { get; set; }

        public ContaCorrente(int saldo, int numero) : base(numero)
        {
            Saldo = saldo;
        }
    }
}
