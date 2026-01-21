using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BancoBanri
{
    public class ContaPoupanca : Conta
    {
        public int Saldo { get; set; }

        public ContaPoupanca(int saldo, int numero) : base(numero)
        {
            Saldo = saldo;
        }
    }
}
