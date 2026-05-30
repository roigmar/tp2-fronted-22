import './SkillBar.css';

const SkillBar = ({ nombre, nivel }) => {
    return (
        <div className="barra-contenedor">
            <div className="barra-label">
                <span>{nombre}</span>
                <span>{nivel}%</span>
            </div>
            <div className="barra-fondo">
                <div
                    className="barra-relleno"
                    style={{ '--nivel': `${nivel}%` }}
                ></div>
            </div>
        </div>
    );
};

export default SkillBar;
