import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { TableWrapper, TablePagination, TableSortToggle } from './table';
import { useTableSort } from './table.hooks';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    controls: { sort: 'alpha' },
  },

  argTypes: {
    /* theming */
    children: {
      name: 'children',
      table: {
        type: {
          summary: 'text|React.ReactElement',
        },
      },
    },
    colorScheme: {
      name: 'colorScheme',
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'gray'],
      },
      table: {
        type: {
          summary: 'primary|secondary|gray|success|warning|negative|info',
        },
      },
    },

    variant: {
      name: 'variant',
      control: {
        type: 'select',
        options: ['simple', 'striped', 'unstyled'],
      },
      table: {
        type: {
          summary: '"simple" | "striped" | "unstyled"',
        },
      },
    },
  },
} as ComponentMeta<typeof Table>;

const items = [
  {
    toConvert: '1',
    into: 'millimetres',
    multiplyBy: '1.2',
  },
  {
    toConvert: '2',
    into: 'centimetres',
    multiplyBy: '30.48',
  },
  {
    toConvert: '3',
    into: 'metres',
    multiplyBy: '0.91444',
  },
  {
    toConvert: '4',
    into: 'millimetres',
    multiplyBy: '15.4',
  },
  {
    toConvert: '5',
    into: 'centimetres',
    multiplyBy: '30.48',
  },
  {
    toConvert: '6',
    into: 'metres',
    multiplyBy: '0.91444',
  },
];

export const TableExample: ComponentStory<typeof Table> = args => {
  return (
    <TableWrapper>
      <TableContainer>
        <Table {...args}>
          <TableCaption>This is the table caption</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item, i) => {
              return (
                <Tr key={i}>
                  <Td>{item.toConvert}</Td>
                  <Td>{item.into}</Td>
                  <Td isNumeric>{item.multiplyBy}</Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};

export const TableExampleWithPagination: ComponentStory<any> = args => {
  // num of rows per page
  const [pageSize, setPageSize] = useState(2);

  // current page
  const [from, setFrom] = useState(1);

  // For sorting.
  const accessDataFn = (v: any) => v;
  const [{ data, orderBy, sortBy }, updateSort] = useTableSort(
    items,
    accessDataFn,
  );

  const rows = data || [];

  // Format column names.
  const columns = Object.keys(items[0]).map(c => {
    const column = { key: c, name: c, isNumeric: false };
    if (c === 'toConvert') {
      column.name = 'To Convert';
    }
    if (c === 'multiplyBy') {
      column.name = 'Multiply By';
      column.isNumeric = true;
    }
    return column;
  });

  return (
    <TableWrapper {...args}>
      <TableContainer>
        <Table {...args}>
          <TableCaption color='text.body'>
            This is the table caption
          </TableCaption>
          <Thead>
            <Tr>
              {columns.map(c => {
                return (
                  <Th
                    key={c.key}
                    role='columnheader'
                    scope='col'
                    isNumeric={c.isNumeric}
                  >
                    {c.name}
                    <TableSortToggle
                      isSelected={c.key === orderBy}
                      sortBy={sortBy}
                      handleToggle={(sortBy: boolean) => {
                        updateSort(c.key, sortBy);
                      }}
                    />
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {rows
              .slice(from * pageSize, from * pageSize + pageSize)
              .map((item: any, i: number) => {
                return (
                  <Tr key={i}>
                    <Td>{item.toConvert}</Td>
                    <Td>{item.into}</Td>
                    <Td isNumeric>{item.multiplyBy}</Td>
                  </Tr>
                );
              })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <TablePagination
        total={data.length}
        size={pageSize}
        setSize={setPageSize}
        from={from}
        setFrom={setFrom}
        pageSizeOptions={Array.from(Array(Math.ceil(data.length / 2))).map(
          (_: any, i) => (i + 1) * 2,
        )}
        {...args}
      />
    </TableWrapper>
  );
};
