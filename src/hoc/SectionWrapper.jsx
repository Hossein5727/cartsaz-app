
const SectionWrapper = (WrappedComponent) => {
    const HOC = () => (
        <div className="mx-auto max-w-7xl relative">
            <WrappedComponent />
        </div>
    )
    return HOC
}

export default SectionWrapper