import PropTypes from 'prop-types';

const Section = ({title, children}) => (
    <div>
        <h2>{title}</h2>
        {children}
    </div>
);

Section.ptopTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default Section;