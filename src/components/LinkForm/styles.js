import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 20px;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  display: block;
  margin-bottom: 10px;
  border: none;
  width: 100%;
  max-width: 400px;
  outline: none;
  border-left: 1px solid black;
  padding: 10px;
  background: radial-gradient(ellipse at top, #1bbac6, transparent),
    radial-gradient(ellipse at bottom, #d99852, transparent);
`;

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  max-width: 400px;
  min-height: 50px;
  border: none;
  border-left: 1px solid black;
  padding: 10px;
  outline: none;
  margin-bottom: 20px;
  background: radial-gradient(ellipse at top, #1bbac6, transparent),
    radial-gradient(ellipse at bottom, #d99852, transparent);
`;

export const Submit = styled.input`
  cursor: pointer;
  border: 1px solid black;
  background: radial-gradient(ellipse at top, #1bbac6, transparent),
    radial-gradient(ellipse at bottom, #d99852, transparent);
`;
