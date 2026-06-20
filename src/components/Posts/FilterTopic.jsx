export const FilterTopic = ({ topics, setSelectedTopic }) => {
    return (
        <select
            onChange={(event) => {
                setSelectedTopic(event.target.value)
            }}
        >
            <option value="">All Topics</option>

            {topics.map(topic => {
                return (
                    <option
                        key={topic.id}
                        value={topic.id}
                    >
                        {topic.name}
                    </option>
                )
            })}
        </select>
    )
}