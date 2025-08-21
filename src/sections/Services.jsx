import { services } from "../constants"
import ServiceCard from '../components/ServiceCard'

function Services() {
    return (
        <section class='max-container flex justify-center flex-wrap gap-9'>
            {services.map(service => <ServiceCard key={service.label} service={service} />)}
        </section>
    )
}

export default Services
