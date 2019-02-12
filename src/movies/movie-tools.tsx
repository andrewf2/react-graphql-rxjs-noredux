import * as React from 'react';

export const MovieTools = ({ movie, onEdit, onRemove }) => {
	return (
		<span className="tools">
			<span className="tool" onClick={onEdit.bind(this, movie)}>
				edit |
			</span>
			<span className="tool" onClick={onRemove.bind(this, movie)}>
				remove
			</span>
		</span>
	);
};
