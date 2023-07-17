
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import axios from 'axios';

const ApiIntegration = () => {
    const [data, setData] = useState([]);
    const [editableCell, setEditableCell] = useState(null);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    const handleEdit = (rowIndex, columnIndex) => {
      setEditableCell({ row: rowIndex, column: columnIndex });
    };
  
    const handleSave = (rowIndex) => {
      // Implement your save logic here, e.g., using Axios to update the API data
      // Get the updated value from the state or directly from the table cell
      const updatedValue = data[rowIndex].name; 
      // Call API endpoint to update the data
      axios.put(`https://jsonplaceholder.typicode.com/users/${data[rowIndex].id}`, {
        name: updatedValue,
      })
        .then((response) => {
          // Handle successful response
          console.log('Data updated successfully:', response.data);
        })
        .catch((error) => {
          // Handle error
          console.error('Error updating data:', error);
        })
        .finally(() => {
          setEditableCell(null); // Reset editable cell state
        });
    };
  
    const handleCellChange = (event, rowIndex, columnIndex) => {
      const { value } = event.target;
      const updatedData = [...data];
      updatedData[rowIndex][columnIndex] = value;
      setData(updatedData);
    };
  
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Username</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={row.id}>
                <TableCell
                  onClick={() => handleEdit(rowIndex, 0)}
                  contentEditable={editableCell?.row === rowIndex && editableCell?.column === 0}
                  onBlur={() => handleSave(rowIndex)}
                  onChange={(event) => handleCellChange(event, rowIndex, 0)}
                >
                  {row.name}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.username}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default ApiIntegration;
  