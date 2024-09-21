import styled, { css } from "styled-components";
import { useContext } from "react";
import { StateContext } from "../StateProvider";

const Tags = () => {
  const { activeTag, setActiveTag } = useContext(StateContext);

  const handleTagClick = (index) => {
    setActiveTag(index);
  };

  return (
    <TagsContainer>
      {["Work", "Short Break", "Long Break"].map((tag, i) => (
        <TagButton
          onClick={() => handleTagClick(i)}
          $activeTag={activeTag === i}
          key={i}
        >
          {tag}
        </TagButton>
      ))}
    </TagsContainer>
  );
};

export default Tags;

const TagsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  height: 5rem;
  width: 100%;
  max-width: 35rem;
  margin: 0 auto;
  border-radius: 5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  overflow: hidden;
`;

const TagButton = styled.div`
  all: unset;
  text-align: center;
  height: 4rem;
  line-height: 3.5rem;
  flex: 1;
  font-size: 2rem;
  border-radius: 5rem;
  cursor: pointer;
  ${({ $activeTag }) =>
    $activeTag &&
    css`
      background: ${(props) => props.theme.colors.grey};
      color: ${(props) => props.theme.colors.black};
    `}

  transition: background 0.3s;
`;
