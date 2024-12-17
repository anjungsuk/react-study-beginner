import react, {Fragment} from 'react';
import Search from "../../components/common/input/Search";

export default function Main() {

    return (
        <Fragment>
            <div className="tit-area">
                <h3 className="h3-tit">통합게시판</h3>
            </div>
            {/*--------Search Area------- */}
            <Search />
        </Fragment>
    )
}