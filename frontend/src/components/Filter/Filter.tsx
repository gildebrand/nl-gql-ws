import "./Filter.css";

export const Filter = <ValueType extends string | number | boolean | null,>({
  label,
  items,
  selectedValue,
  onChange
}: {
  label: string;
  items: {value: ValueType; label: string}[];
  selectedValue: ValueType;
  onChange: (selectedId: ValueType) => void;
}) => {
  return <div className="filter">
    <div className="filter__label">{label}</div>
    <div className="filter__items">
      {items.map(filterItem =>
        <div
          key={JSON.stringify(filterItem.value)}
          className={`filter__items__item ${selectedValue === filterItem.value ? 'filter__items__item--selected' : ''}`}
          onClick={() => onChange(filterItem.value)}>
          {filterItem.label}
        </div>
      )}
    </div>
  </div>
}
