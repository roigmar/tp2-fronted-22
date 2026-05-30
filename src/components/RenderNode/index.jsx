import './RenderNode.css';

const RenderNode = ({ tipo, nombre, badge }) => {
    return (
        <div className={`nodo ${tipo}`}>
            <span className="nodo-nombre">{nombre}</span>
            <span className="nodo-badge">{badge}</span>
        </div>
    );
};

export default RenderNode;
