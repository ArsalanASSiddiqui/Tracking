import React, { useState } from 'react';
import {
    AppBar, Toolbar, Typography, Avatar, Grid, TextField, Select, MenuItem,
    Button, Box, InputLabel, FormControl, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Paper
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const sampleData = [
    { claimId: 410, invoice: '210334', ccd: 'J02', type: 'Credit', itemNumber: 442252, quantity: 1.00, amount: 87.53, customer: 'HANKS CH', status: 'Approved', approver: 'Nadia E.', date: '08/30/2023' },
    { claimId: 410, invoice: '210334', ccd: 'J02', type: 'Credit', itemNumber: 442252, quantity: 1.00, amount: 87.53, customer: 'HANKS CH', status: 'Approved', approver: 'Nadia E.', date: '08/30/2023' },
    { claimId: 410, invoice: '210334', ccd: 'J02', type: 'Credit', itemNumber: 442252, quantity: 1.00, amount: 87.53, customer: 'HANKS CH', status: 'Approved', approver: 'Nadia E.', date: '08/30/2023' },
    { claimId: 410, invoice: '210334', ccd: 'J02', type: 'Credit', itemNumber: 442252, quantity: 1.00, amount: 87.53, customer: 'HANKS CH', status: 'Approved', approver: 'Nadia E.', date: '08/30/2023' },
    { claimId: 410, invoice: '210334', ccd: 'J02', type: 'Credit', itemNumber: 442252, quantity: 1.00, amount: 87.53, customer: 'HANKS CH', status: 'Approved', approver: 'Nadia E.', date: '08/30/2023' },
    { claimId: 410, invoice: '210334', ccd: 'J02', type: 'Credit', itemNumber: 442252, quantity: 1.00, amount: 87.53, customer: 'HANKS CH', status: 'Approved', approver: 'Nadia E.', date: '08/30/2023' },
    
    // Add more rows as needed
];

const TrackingQueueForm = () => {
    // State for form fields
    const [formValues, setFormValues] = useState({
        customer: '',
        shipTo: '',
        claimId: '',
        invoice: '',
        deNumber: '',
        arSpecialist: '',
        servicingDC: '',
        eligibilityDC: '',
        submitterId: '',
        itemNumber: '',
        temperature: '',
        creditCode: '',
        createDateFrom: '',
        createDateTo: '',
        discrepancyAmtFrom: '',
        discrepancyAmtTo: ''
    });

    const [showTasks, setShowTasks] = useState(false);

    // Handler to update form field values
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    // Handler for "Show Tasks" button
    const handleShowTasks = () => {
        setShowTasks(true);
    };

    // Handler for "Clear Filter" button
    const handleClearFilter = () => {
        setFormValues({
            customer: '',
            shipTo: '',
            claimId: '',
            invoice: '',
            deNumber: '',
            arSpecialist: '',
            servicingDC: '',
            eligibilityDC: '',
            submitterId: '',
            itemNumber: '',
            temperature: '',
            creditCode: '',
            createDateFrom: '',
            createDateTo: '',
            discrepancyAmtFrom: '',
            discrepancyAmtTo: ''
        });
        setShowTasks(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* Header */}
            <AppBar position="static" sx={{ backgroundColor: '#007bff' }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Tracking Queue
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <Avatar sx={{ bgcolor: '#ffffff', color: '#007bff', marginRight: 1 }}>
                            <AccountCircleIcon />
                        </Avatar>
                        <Typography variant="subtitle1">
                            Arsalan Ahmed
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Form */}
            <Box sx={{ padding: 2 }}>
                <Grid container spacing={2}>
                    {/* First Row */}
                    <Grid item xs={3}>
                        <TextField label="Customer" name="customer" fullWidth value={formValues.customer} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField label="Ship To" name="shipTo" fullWidth value={formValues.shipTo} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField label="Claim ID" name="claimId" fullWidth value={formValues.claimId} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField label="Invoice" name="invoice" fullWidth value={formValues.invoice} onChange={handleInputChange} />
                    </Grid>

                    {/* Second Row */}
                    <Grid item xs={3}>
                        <TextField label="DE #" name="deNumber" fullWidth value={formValues.deNumber} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth>
                            <InputLabel>AR Specialist</InputLabel>
                            <Select name="arSpecialist" value={formValues.arSpecialist} onChange={handleInputChange}>
                                <MenuItem value="specialist1">Specialist 1</MenuItem>
                                <MenuItem value="specialist2">Specialist 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth>
                            <InputLabel>Servicing DC</InputLabel>
                            <Select name="servicingDC" value={formValues.servicingDC} onChange={handleInputChange}>
                                <MenuItem value="dc1">DC 1</MenuItem>
                                <MenuItem value="dc2">DC 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth>
                            <InputLabel>Eligibility DC</InputLabel>
                            <Select name="eligibilityDC" value={formValues.eligibilityDC} onChange={handleInputChange}>
                                <MenuItem value="edc1">EDC 1</MenuItem>
                                <MenuItem value="edc2">EDC 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Third Row */}
                    <Grid item xs={3}>
                        <TextField label="Submitter ID" name="submitterId" fullWidth value={formValues.submitterId} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth>
                            <InputLabel>Item #</InputLabel>
                            <Select name="itemNumber" value={formValues.itemNumber} onChange={handleInputChange}>
                                <MenuItem value="item1">Item 1</MenuItem>
                                <MenuItem value="item2">Item 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField label="Temperature" name="temperature" fullWidth value={formValues.temperature} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth>
                            <InputLabel>Credit Code</InputLabel>
                            <Select name="creditCode" value={formValues.creditCode} onChange={handleInputChange}>
                                <MenuItem value="code1">Code 1</MenuItem>
                                <MenuItem value="code2">Code 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Fourth Row (Dates) */}
                    <Grid item xs={3}>
                        <TextField label="Create Date (From)" name="createDateFrom" fullWidth type="date" InputLabelProps={{ shrink: true }} value={formValues.createDateFrom} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField label="Create Date (To)" name="createDateTo" fullWidth type="date" InputLabelProps={{ shrink: true }} value={formValues.createDateTo} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField label="Discrepancy Amt (From)" name="discrepancyAmtFrom" fullWidth value={formValues.discrepancyAmtFrom} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField label="Discrepancy Amt (To)" name="discrepancyAmtTo" fullWidth value={formValues.discrepancyAmtTo} onChange={handleInputChange} />
                    </Grid>

                    {/* Buttons */}
                    <Grid item xs={6} textAlign="right">
                        <Button variant="outlined" onClick={handleClearFilter}>Clear Filter</Button>
                    </Grid>
                    <Grid item xs={6} textAlign="left">
                        <Button variant="contained" color="primary" onClick={handleShowTasks}>Show Tasks</Button>
                    </Grid>
                </Grid>

                {/* Data Table */}
                {showTasks && (
                    <TableContainer component={Paper} sx={{ marginTop: 3, maxHeight: 250, overflowY: 'auto', border: '1px solid #ddd', borderRadius: 1 }}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#007bff' }}>
                                    <TableCell sx={{ color: '#ffffff' }}>Claim ID</TableCell>
                                    <TableCell sx={{ color: '#ffffff' }}>Invoice</TableCell>
                                    <TableCell sx={{ color: '#ffffff' }}>CCD</TableCell>
                                    <TableCell sx={{ color: '#ffffff' }}>Type</TableCell>
                                    <TableCell sx={{ color: '#ffffff' }}>Item #</TableCell>
                                    <TableCell sx={{ color: '#ffffff' }}>Qty</TableCell>
                                    <TableCell sx={{ color: '#ffffff' }}>Amount</TableCell>
                                    <TableCell sx={{ color: '#ffffff' }}>Customer</TableCell>
                                    <TableCell sx={{ color: '#ffffff' }}>Status</TableCell>
                                    <TableCell sx={{ color: '#ffffff' }}>Approver</TableCell>
                                    <TableCell sx={{ color: '#ffffff' }}>Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sampleData.map((row, index) => (
                                    <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#fafafa' } }}>
                                        <TableCell>{row.claimId}</TableCell>
                                        <TableCell>{row.invoice}</TableCell>
                                        <TableCell>{row.ccd}</TableCell>
                                        <TableCell>{row.type}</TableCell>
                                        <TableCell>{row.itemNumber}</TableCell>
                                        <TableCell>{row.quantity}</TableCell>
                                        <TableCell>{row.amount}</TableCell>
                                        <TableCell>{row.customer}</TableCell>
                                        <TableCell>{row.status}</TableCell>
                                        <TableCell>{row.approver}</TableCell>
                                        <TableCell>{row.date}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Box>
        </Box>
    );
}

export default TrackingQueueForm;
