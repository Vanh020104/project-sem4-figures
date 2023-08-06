import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import Button from '~/components/Button/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/da329be00ccf6371d6f48faca7b151f1.jpeg?x-expires=1690898400&x-signature=FEh4yO%2Bw%2FHNVrjWT2eK7Pi5bXto%3D"
                    alt="Nguyen Phu Tam"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>tamphuuu</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyễn Phú Tâm</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>18.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>20.4B </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
