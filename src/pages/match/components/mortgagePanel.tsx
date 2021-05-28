
import Mortgage from '../../../models/mortgage'

export interface MortgagePanelProps {
  mortgageList: Mortgage[]
}

export default function MortgagePanel(props: MortgagePanelProps) {
  return (
    <div>
    { (props.mortgageList || []).map((mg: Mortgage) => <div>
      <pre>
        {JSON.stringify(mg)}
      </pre>
      <button>CHANGE MORTGAGE</button>
    </div>)
    }
    </div>
  );
}