'use client';

import { useCallback, useState } from 'react';
import {
  CanisGraph,
  biologyNodeTypes,
  biologyNodeTypeMap,
  StepPanel,
  usePresentationControls,
} from '@untangling/canis/react';
import type { CanisGraphConfig, PresentationStep } from '@untangling/canis';
import type { CanisNodeData } from '@untangling/canis/react';
import type { Node as XYNode } from '@xyflow/react';
import { ironGraphData } from '@/data/iron-graph';
import { ironPresentationSteps } from '@/data/iron-diagram-steps';

const GRAPH_CONFIG: CanisGraphConfig = {
  detailLevel: 'presentation',
  background: 'dots',
  nodeDisplay: {
    showDescription: false,
    showMechanism: false,
    showModule: true,
    showConfidence: false,
    showPmid: false,
  },
  animationDuration: 400,
  fitOnInit: true,
};

/** Inner component that has access to PresentationProvider context */
function IronGraphControls() {
  usePresentationControls({ keyboard: true, swipe: true });
  return null;
}

interface IronGraphProps {
  className?: string;
}

export function IronGraph({ className }: IronGraphProps) {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const handleNodeClick = useCallback(
    (nodeId: string, node: XYNode<CanisNodeData>) => {
      setSelectedNode(nodeId);
    },
    [],
  );

  return (
    <div className={`flex flex-col lg:flex-row gap-6 w-full ${className ?? ''}`}>
      {/* Graph viewer */}
      <div className="flex-1 min-w-0 overflow-hidden border border-white/10"
           style={{ height: 500, minHeight: 400 }}>
        <CanisGraph
          data={ironGraphData}
          config={GRAPH_CONFIG}
          nodeTypes={biologyNodeTypes as any}
          nodeTypeMap={biologyNodeTypeMap}
          steps={ironPresentationSteps}
          onNodeClick={handleNodeClick}
          style={{ background: '#1A0F0A' }}
        />
      </div>

      {/* Step panel */}
      <StepPanel
        style={{
          width: 320,
          flexShrink: 0,
        }}
      />

      {/* Selected node detail (optional) */}
      {selectedNode && (
        <div className="fixed bottom-4 left-4 right-4 lg:left-auto lg:right-4 lg:w-80 glass-card p-4 z-50">
          <button
            onClick={() => setSelectedNode(null)}
            className="absolute top-2 right-2 text-gray-400 hover:text-white text-sm"
          >
            ×
          </button>
          <p className="text-xs text-teal-400 font-medium uppercase tracking-wide mb-1">
            Selected Node
          </p>
          <p className="text-sm text-white font-bold">
            {ironGraphData.nodes.find((n) => n.id === selectedNode)?.label}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {ironGraphData.nodes.find((n) => n.id === selectedNode)?.description}
          </p>
        </div>
      )}
    </div>
  );
}
