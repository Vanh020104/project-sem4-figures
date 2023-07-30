import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/da329be00ccf6371d6f48faca7b151f1.jpeg?x-expires=1690898400&x-signature=FEh4yO%2Bw%2FHNVrjWT2eK7Pi5bXto%3D"
                alt="PhuTam"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Phu Tam</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>phutam54</span>
            </div>
        </div>
    );
}

export default AccountItem;
