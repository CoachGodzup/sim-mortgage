
import Mortgage, { MortgageFixRate } from '../../../models/mortgage'

export interface MortgagePanelProps {
  mortgageList: Mortgage[]
}

export default function MortgagePanel(props: MortgagePanelProps) {
  return (
    <div>
      { (props.mortgageList || []).map((mg: Mortgage) => <section>
        <h4>{mg.name}</h4>
        <h4><small>{mg.bank}</small></h4>
        <div>

          <p>Duration: {mg.durationTurns} turns</p>
          <p>Percentage: {mg.housePercentage} %</p>
          <p>Rate: {mg.rate.type} {(mg.rate as MortgageFixRate).value} %</p>
          {/* <pre>
            {JSON.stringify(mg)}
          </pre> */}
        </div>
        <button>CHANGE MORTGAGE</button>
      </section>)}
    </div>
  );
}