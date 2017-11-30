import styled from 'styled-components';
import './ListItemWrapper.css';

export default styled.div`
  display: grid;
  grid-template-columns: 5% 80% 15%;
  grid-template-rows: auto;
  grid-template-areas:
    "checkbox description duedate";
  background-color: cyan;
  max-width: 500px;
`;
