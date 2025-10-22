export default function TokenomicsCard(){
  const rows = [['Presale (50% to Foundation)','40%'],['Liquidity','25%'],['Charity Wallet','20%'],['Marketing & CEX','10%'],['Team & Dev','5%']]
  return (
    <div className="card">
      <h4 className="font-semibold mb-3">Tokenomics</h4>
      <div className="space-y-2">
        {rows.map((r,i)=> (
          <div key={i} className="flex justify-between text-sm">
            <div>{r[0]}</div>
            <div className="font-medium">{r[1]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
