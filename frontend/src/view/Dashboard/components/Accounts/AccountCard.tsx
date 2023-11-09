import { formatCurrency } from '../../../../app/utils/formatCurrency';
import { BankAccountTypeIcon } from '../../../components/icons/BankAccountTypeIcon';

interface AccountCardProps {
  name: string;
  color: string;
  balance: number;
  type: 'CASH' | 'CHECKING' | 'INVESTMENT';
}

export function AccountCard({ balance, color, name, type }: AccountCardProps) {
  return (
    <div
      className="p-4 bg-white rounded-2xl h-[200px] flex flex-col justify-between border-b-4 border-teal-950"
      style={{ borderColor: color }}
    >
      <div>
        <BankAccountTypeIcon type={type} />
        <span className="text-gray-800 font-medium tracking-[-0.5px] mt-4 block">
          {name}
        </span>
      </div>

      <div>
        <span className="text-gray-800 fome tracking-[-0.5px] block">
          {formatCurrency(balance)}
        </span>
        <small className="text-gray-600 text-sm">Salto atual</small>
      </div>
    </div>
  );
}