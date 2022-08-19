import React, { Component } from 'react';
import ChevronDown from '../../assets/svg/chevronDown'
import Info from '../../assets/svg/info'

const styles = {
    textIcon: 'flex items-center'
}

class CMCTableHeader extends Component {
    render() {
        return (
            <tbody>
                <tr>
                    <th></th>
                    <th className={styles.textIcon}><b># &nbsp;</b><ChevronDown/></th>
                </tr>
                
            </tbody>
        );
    }
}

export default CMCTableHeader;

