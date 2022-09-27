import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  //accessing image url props from category
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffe202;
  opacity: 0.7;
  position: absolute;

  h2 {
    text-transform: uppercase;
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #333;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }

  @media screen and (max-width: 700px) {
    h2 {
      font-size: 16px;
    }
  }
`;

export const CategoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(124, 124, 124);
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.15);
      transition: transform 5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    min-width: 40%;
    height: 210px;
  }

  @media screen and (max-width: 340px) {
    min-width: 50%;
    height: 210px;
  }
`;
