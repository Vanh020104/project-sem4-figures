import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (attrs) => (
        <div className={cx('preview')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );

    return (
        <div>
            <Tippy interactive offset={[-20, 0]} placement="bottom" delay={[800, 0]} render={renderPreview}>
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
            </Tippy>
        </div>
    );
}

export default AccountItem;
