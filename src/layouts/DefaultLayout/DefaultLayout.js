import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Footer from '../components/Footer/Footer';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('main-wrapper overflow-hidden')}>
            <Header />
            <div className={cx('page-content')}>
                <div>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
