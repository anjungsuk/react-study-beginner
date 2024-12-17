import {Fragment} from "react";

export default function Search() {

    return (
        <Fragment>
            <div className="hide-dv mt10" id="hideDv">
                <table className="view">
                    <colgroup>
                        <col style={{width: '150px'}}/>
                        <col/>
                    </colgroup>
                    <tbody>
                    <tr>
                        <th>카테고리</th>
                        <td>
                            <select className="select" style={{width: '150px'}}>
                                <option>전체</option>
                                <option>-</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>검색어</th>
                        <td>
                            <select className="select" style={{width: '150px'}}>
                                <option>전체</option>
                                <option>-</option>
                            </select>
                            <input type="text" className="input" style={{width: '300px'}}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="btn-box btm l">
                <a href="#" class="btn btn-red fr">검색</a>
            </div>
        </Fragment>
    )
}