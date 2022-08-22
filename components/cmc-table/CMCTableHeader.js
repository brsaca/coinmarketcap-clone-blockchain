import React, { Component } from 'react';
import ChevronDown from '../../assets/svg/chevronDown'
import Info from '../../assets/svg/info'

const styles = {
    textIcon: 'flex items-center',
    title: 'mr-2'
}

class CMCTableHeader extends Component {
    render() {
        return (
            <tbody>
                <tr>
                    <th></th>
                    <th className={styles.textIcon}><b># &nbsp;</b><ChevronDown/></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>24h %</th>
                    <th>7d %</th>
                    <th><div className={styles.textIcon}><p className={styles.title}>Market Cap</p><Info/></div></th>
                    <th><div className={styles.textIcon}><p className={styles.title}>Volume</p><Info/></div></th>
                    <th><div className={styles.textIcon}><p className={styles.title}>Circulating Supply</p><Info/></div></th>
                    <th>Last 7 days</th>
                </tr>
                
            </tbody>
        );
    }
}

export default CMCTableHeader;

