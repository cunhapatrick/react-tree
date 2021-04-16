import React, { FC, ReactElement } from 'react';
import { Container } from 'react-bootstrap';

import { ICheckProps } from './interface';

const CheckElement: FC<ICheckProps> = ({
	id,
	name,
	check,
	level,
	selectedAll,
	handleCheck,
	handleDropdown,
	dropdown,
}): ReactElement => (
	<Container>
		<div className="custom-control custom-checkbox">
			<input
				style={{ padding: `${level * 20}px` }}
				type="checkbox"
				checked={check}
				onChange={handleCheck}
				ref={(el) => el && (el.indeterminate = check && !selectedAll)}
				className="custom-control-input"
			/>
			<button type="button" onClick={handleDropdown}>
				<label className="custom-control-label" htmlFor="customCheck1">
					{name}
				</label>
				{dropdown ? <i>Anchor up</i> : <i>Anchor down</i>}
			</button>
		</div>
	</Container>
);

export default CheckElement;
