import RenderNode from '../RenderNode';

const TreeNodeMobile = ({ node }) => {
    const hijosCombinados = [
        ...(node.hijos || []),
        ...(node.ramas || [])
    ];

    return (
        <li>
            <RenderNode tipo={node.tipo} nombre={node.nombre} badge={node.badge} />
            {hijosCombinados.length > 0 && (
                <ul>
                    {hijosCombinados.map((hijo, index) => (
                        <TreeNodeMobile key={index} node={hijo} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default TreeNodeMobile;
