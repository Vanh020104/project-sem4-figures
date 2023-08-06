import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/da329be00ccf6371d6f48faca7b151f1.jpeg?x-expires=1690898400&x-signature=FEh4yO%2Bw%2FHNVrjWT2eK7Pi5bXto%3D"
                alt="Nguyen Phu Tam"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>tamphuuu</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyễn Phú Tâm</p>
            </div>
        </div>
    );
}

export default AccountItem;
