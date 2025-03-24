import styled from "styled-components";

const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 10vh;
  padding: 15px 20px;
  background: linear-gradient(135deg, #f4f6f9, #e8e8e8); /* Subtle gradient */
  color: #333;
  position: relative;
  border-radius: 12px;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.15);
`;

const HeaderInfo = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #2c6e49;
`;

const InputContainer = styled.div`
  position: relative;
  width: 300px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid transparent;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease-in-out;
  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #4656a1;
    box-shadow: 0px 4px 8px rgba(70, 86, 161, 0.2);
  }
`;

const Button = styled.button`
  padding: 12px 18px;
  border: none;
  background: linear-gradient(135deg, #4656a1, #3e4b5b);
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, #3e4b5b, #2c6e49);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background: #2c6e49;
  }
`;

const SuggestionsList = styled.ul`
  position: absolute;
  width: 100%;
  background: white;
  color: #333;
  border-radius: 6px;
  list-style: none;
  padding: 10px;
  max-height: 180px;
  overflow-y: auto;
  z-index: 10;
  top: 100%;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #ccc;

  li {
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #e8e8e8;
      border-radius: 4px;
    }
  }

  .active {
    background: #64748b;
    color: white;
    border-radius: 4px;
  }
`;

export { Head, HeaderInfo, InputContainer, Input, Button, SuggestionsList };
