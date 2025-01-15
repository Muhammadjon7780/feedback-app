// import { useContext } from "react";
// import { DataContext } from "../../contexts/context-data";
import MainTitle from "../../components/main-title/main-title";
import Container from "../../components/container/container";

import "./main.scss";
import ProductsFilter from "../../components/products-filter/products-filter";
import Header from "../../components/header/header";
import { useData } from "../../contexts/context-data";
import { Link } from "react-router-dom";
import UpvoteButton from "../../components/upvote-button/upvote-button";
import FeedbackBox from "../../components/feedback-box/feedback-box";
import Category from "../../components/category/category";
import Comment from "../../components/comment/comment";
import NoFeedback from "../../components/no-feedback/no-feedback";
import Rest from "../../components/smt/smt";

const Main = () => {
  const { data } = useData();

  return (
    <main className="main">
      <Container className="main__container">
      

        <div className="main__filter">


          <MainTitle />
          <ProductsFilter />
        </div>

        <section className="main-section">
          <Header />

          <div
            className={`main__products ${
              data.productRequests && data.productRequests.length > 0
                ? ""
                : "main__products--white-bg"
            }`}
          >
            {data.productRequests && data.productRequests.length > 0 ? (
              data.productRequests.map((product) => (
                <FeedbackBox key={product.id}>
                  <div className="feedback-box__inner">
                    <UpvoteButton
                      data-id={product.id}
                      className={product.isLiked ? "upvote-btn__liked" : ""}
                    >
                      {product.upvotes}
                    </UpvoteButton>

                    <div className="feedback-box__title">
                      <Link
                        to={`feedback/${product.id}`}
                        className="feedback-title"
                      >
                        {product.title}
                      </Link>
                      <p className="feedback-desc">{product.description}</p>
                      <Category data-filter-id={product.id}>
                        {product.category}
                      </Category>
                    </div>

                    <Comment>{product.comments?.length || 0}</Comment>
                  </div>
                </FeedbackBox>
              ))
            ) : (
              <NoFeedback />
            )}
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Main;
