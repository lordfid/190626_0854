type Props = { title: string; items: string[]; emptyText?: string };

export function WarningPanel({ title, items, emptyText = 'Tidak ada catatan besar pada bagian ini.' }: Props) {
  return (
    <section className="result-section muted-section">
      <h2>{title}</h2>
      {items.length ? <ul className="clean-list">{items.map((item) => <li key={item}>{item}</li>)}</ul> : <p>{emptyText}</p>}
    </section>
  );
}
