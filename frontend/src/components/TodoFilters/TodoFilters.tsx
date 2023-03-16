import { Filter } from '../Filter/Filter';
import React from 'react';
import { useCurrentUserQuery } from '../../generated/graphql';

export const TodoFilters = ({
  statusFilterValue,
  setStatusFilterValue,
  ownerFilterValue,
  setOwnerFilterValue
}: {
  statusFilterValue: boolean | null;
  setStatusFilterValue: (statusFilterValue: boolean | null) => void;
  ownerFilterValue: number | null;
  setOwnerFilterValue: (ownerFilterValue: number | null) => void;
}) => {
  const {data: userData} = useCurrentUserQuery();


  return <div style={{
    display: 'flex',
    justifyContent: 'space-around'
  }}>
    <Filter
      label="Status"
      items={[
        {value: null, label: "All"},
        {value: true, label: "Done"},
        {value: false, label: "Pending"},
      ]}
      selectedValue={statusFilterValue}
      onChange={setStatusFilterValue}
    />
    <Filter
      label="Created by"
      items={[
        {value: null, label: "Everyone"},
        {value: userData?.getCurrentUser.id ?? -1, label: "Me"},
      ]}
      selectedValue={ownerFilterValue}
      onChange={setOwnerFilterValue}
    />
  </div>
};
