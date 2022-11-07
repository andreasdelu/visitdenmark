export default function PlaceItem({ place }) {
	return (
		<div style={{ display: "float" }}>
			<div style={{ float: "left", width: "25%" }}>{place.Name}</div>
			<div style={{ float: "left", width: "75%" }}>{place.Category.Name}</div>
		</div>
	);
}
