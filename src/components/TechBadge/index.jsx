import { getTechIcon } from '../../data/techIcons';
import './TechBadge.css';

const TechBadge = ({ tech }) => {
    const iconUrl = getTechIcon(tech);
    
    return (
        <span className="tech-badge">
            {iconUrl && <img src={iconUrl} alt={tech} className="tech-icon" />}
            {tech}
        </span>
    );
};

export default TechBadge;
