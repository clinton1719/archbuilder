import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setFormData } from './slices/formSlice';
import type { FormData } from './types/FormData';

export function HomeFormPage() {
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data: FormData) => {
    dispatch(setFormData(data));
    navigate('/add-services');
  };

  return (
    <div style={{ padding: '2em' }}>
      <Typography variant="h4" sx={{ mb: '1em', mt: '1em' }} textAlign={'center'}>
        Provide your application requirements
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} style={{ whiteSpace: 'normal' }}>
          <Grid size={4}>
            <Box my={2}>
              <TextField
                required
                fullWidth
                helperText="What is the primary scale expectation for your application's user base and data volume over the next 1-3 years?"
                variant="outlined"
                label="Primary scale expectation"
                select
                {...register('appScale')}
              >
                <MenuItem value="small">Small (Tens of users, MBs of data)</MenuItem>
                <MenuItem value="medium">Medium (Hundreds to thousands of users, GBs to TBs of data)</MenuItem>
                <MenuItem value="large">Large (Tens of thousands to millions of users, TBs to PBs of data)</MenuItem>
                <MenuItem value="massive">Massive (Millions+ users, PBs+ of data)</MenuItem>
              </TextField>
            </Box>
          </Grid>
          <Grid size={4}>
            <Box my={2}>
              <TextField
                required
                fullWidth
                helperText="What is your main concern regarding performance and responsiveness?"
                variant='outlined'
                label="Responsiveness"
                select
                {...register('responsiveness')}
              >
                <MenuItem value="eventual">Eventual (It's acceptable for data updates to propagate across the system with a short delay (seconds to minutes) before being fully consistent everywhere)</MenuItem>
                <MenuItem value="standard">Standard (Typical web application performance is acceptable; a few hundred milliseconds response time is fine)</MenuItem>
                <MenuItem value="high">High (Users expect quick feedback, even for complex operations; millisecond-level response times are important)</MenuItem>
                <MenuItem value="strict">Strict (All data must be immediately consistent and available across the entire system; no delays are acceptable)</MenuItem>
              </TextField>
            </Box>
          </Grid>
          <Grid size={4}>
            <Box my={2}>
              <TextField
                required
                fullWidth
                helperText="How critical is system availability and fault tolerance?"
                label="Availability"
                select
                {...register('availability')}
              >
                <MenuItem value="high">High (99.9% uptime, Downtime is disruptive but tolerable for short periods; standard backup and recovery processes suffice)</MenuItem>
                <MenuItem value="veryHigh">Very high (99.99% uptime, Downtime significantly impacts business operations; require redundancy and quick recovery mechanisms)</MenuItem>
                <MenuItem value="extremelyHigh">Extremely high (99.999%, Any downtime is catastrophic; requires active-active redundancy, geo-distribution, and self-healing capabilities)</MenuItem>
              </TextField>
            </Box>
          </Grid>
          <Grid size={4}>
            <Box my={2}>
              <TextField
                required
                fullWidth
                helperText="What is your primary concern regarding data consistency across your system?"
                label="Data consistency"
                select
                {...register('dataConsistency')}
              >
                <MenuItem value="strong">Strong Consistency (All read operations return the most recent write; transactions are atomic, consistent, isolated, and durable (ACID))</MenuItem>
                <MenuItem value="eventual">Eventual Consistency (Data might temporarily be inconsistent across the system but will eventually converge to a consistent state)</MenuItem>
                <MenuItem value="read">Read Consistency (Prioritize fresh data for reads, while write operations can be decoupled and processed asynchronously)</MenuItem>
              </TextField>
            </Box>
          </Grid>
          <Grid size={4}>
            <Box my={2}>
              <TextField
                required
                fullWidth
                helperText="What kind of eventing or communication do you prefer between services?"
                label="Communication"
                select
                {...register('communication')}
              >
                <MenuItem value="synchronous">Synchronous (REST/RPC)</MenuItem>
                <MenuItem value="asynchronous">Asynchronous (Event-based / Message Queue)</MenuItem>
                <MenuItem value="mixed">Mixed</MenuItem>
              </TextField>
            </Box>
          </Grid>
          <Grid size={4}>
            <Box my={2}>
              <TextField
                required
                fullWidth
                helperText="What is your tolerance for eventual failure and retry mechanisms?"
                label="Tolerance"
                select
                {...register('tolerance')}
              >
                <MenuItem value="low">Low (Need deterministic outcomes)</MenuItem>
                <MenuItem value="medium">Medium (Retries acceptable)</MenuItem>
                <MenuItem value="high">High (Best-effort delivery, compensating logic okay)</MenuItem>
              </TextField>
            </Box>
          </Grid>
          <Grid size={4}>
            <Box my={2}>
              <TextField
                required
                fullWidth
                helperText="What kind of storage best suits your application components?"
                label="Storage "
                select
                {...register('storage')}
              >
                <MenuItem value="sql">Primarily Relational (ACID SQL)</MenuItem>
                <MenuItem value="nosql">Primarily NoSQL (eventual consistency, scale-out)</MenuItem>
                <MenuItem value="mixed">Mixed (Some services use SQL, some NoSQL)</MenuItem>
              </TextField>
            </Box>
          </Grid>
          <Grid size={4}>
            <Box my={2}>
              <TextField
                required
                fullWidth
                helperText="What is your approach to managing application complexity and team structure?"
                label="Application complexity"
                select
                {...register('applicationComplexity')}
              >
                <MenuItem value="small">Small, Unified Team (A small team working on a single codebase; simplicity and faster initial development are key)</MenuItem>
                <MenuItem value="growing">Growing Team (Teams can work somewhat independently but still share a common understanding of the system)</MenuItem>
                <MenuItem value="large">Large, Independent Teams (Teams need to work autonomously on distinct parts of the system with minimal dependencies)</MenuItem>
              </TextField>
            </Box>
          </Grid>
          <Grid size={4}>
            <Box my={2}>
              <TextField
                required
                fullWidth
                helperText="How frequently do you anticipate changes or new features affecting different parts of the system?"
                label="Frequency of change"
                select
                {...register('frequencyOfChange')}
              >
                <MenuItem value="infrequent">Infrequent/Major Releases (Changes are batched and released periodically; large testing cycles are acceptable)</MenuItem>
                <MenuItem value="regular">Regular/Component-based Releases (Specific parts of the system are updated more frequently than others, requiring isolated deployments)</MenuItem>
                <MenuItem value="continuous">Continuous/Independent Deployments (Different features or services are deployed independently and continuously without affecting others)</MenuItem>
              </TextField>
            </Box>
          </Grid>
          <Grid size={4}>
            <Box my={2}>
              <TextField
                required
                fullWidth
                helperText="How complex are the business transactions that span multiple data boundaries or services?"
                label="Business transactions complexity"
                select
                {...register('businessTransactionsComplexity')}
              >
                <MenuItem value="simple">Simple (Most transactions involve a single step or update within one database/service)</MenuItem>
                <MenuItem value="moderate">Moderate (Transactions involve a sequence of steps that might update a few related data entities or services)</MenuItem>
                <MenuItem value="complex">Complex  (Business processes involve many independent steps across multiple services, requiring sophisticated coordination)</MenuItem>
              </TextField>
            </Box>
          </Grid>
          <Grid size={4}>
            <Box my={2}>
              <TextField
                required
                fullWidth
                helperText="What is your priority regarding technology stack flexibility?"
                label="Technology stack"
                select
                {...register('technologyStack')}
              >
                <MenuItem value="homogeneous">Homogeneous (Stick to one primary programming language and technology stack across the entire application)</MenuItem>
                <MenuItem value="polyglot">Polyglot (Different parts of the system can use different languages, databases, or frameworks based on suitability)</MenuItem>
              </TextField>
            </Box>
          </Grid>

        </Grid>
        <Button type="submit" variant="contained" color="primary">
          Configure my architecture
        </Button>
      </form>
    </div>
  );
}
