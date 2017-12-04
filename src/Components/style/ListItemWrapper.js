import styled from 'styled-components';
import './ListItemWrapper.css';

export default styled.li`
  display: grid;
  grid-template-columns: 5% 60% 35%;
  grid-template-rows: auto;
  grid-template-areas:
    "checkbox description duedate";
  max-width: 500px;
`;
