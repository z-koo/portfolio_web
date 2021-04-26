import React from "react";
import styled from "styled-components";
import PostListForm from "../../components/Blog/PostListForm";
import PageContainer from "../../components/layout/PageContainer";

const Blog = () => {
  return (
    <StyledPageContainer>
      <PostListForm />
    </StyledPageContainer>
  );
};

const StyledPageContainer = styled(PageContainer)`
  padding-top: 5rem;
  width: min(768px, 100%);
`;

export default Blog;
