import { Link } from "react-router-dom";
import { useData } from "../../contexts/context-data";
import "../../sass/general.scss";
import FilterBox from "../filter-box/filter-box";
import "./roadmap-filter.scss";
import { useMemo } from "react";

const RoadMapFilter = () => {
  const { data } = useData();

  const count = useMemo(
    () =>
      data.productRequests.reduce(
        (accumulator, product) => {
          switch (product.status) {
            case "suggestion":
              ++accumulator.suggestion;
              break;
            case "planned":
              ++accumulator.planned;
              break;
            case "in-progress":
              ++accumulator.inProgress;
              break;
            default:
              ++accumulator.live;
          }
          return accumulator;
        },
        {
          suggestion: 0,
          planned: 0,
          inProgress: 0,
          live: 0,
        }
      ),
    [data]
  );

  return (
    <FilterBox className="roadmap__figure__wrap">
      <div className="roadmap__wrap">
        <h2 className="roadmap__wrap-title">Roadmap</h2>
        <Link className="roadmap__wrap-link" to="#">
          view
        </Link>
      </div>

      <div className="roadmap__process">
        <div className="roadmap__box">
          <span className="roadmap__box-suggestion"></span>
          <p className="roadmap__box-text">Suggestion: {count.suggestion}</p>
        </div>

        <div className="roadmap__box">
          <span className="roadmap__box-planned"></span>
          <p className="roadmap__box-text">Planned: {count.planned}</p>
        </div>

        <div className="roadmap__box">
          <span className="roadmap__box-progress"></span>
          <p className="roadmap__box-text">In-Progress: {count.inProgress}</p>
        </div>

        <div className="roadmap__box">
          <span className="roadmap__box-live"></span>
          <p className="roadmap__box-text">Live: {count.live}</p>
        </div>
      </div>
    </FilterBox>
  );
};
export default RoadMapFilter;
