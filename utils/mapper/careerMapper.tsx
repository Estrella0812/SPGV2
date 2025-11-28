import {Careers} from "../entities/careers"

export function mapCareer(career: Careers): Careers{
    return{
        id: career.id,
        created_at: career.created_at,
        title: career.title,
        location: career.location,
        type: career.type,
        creator: career.creator,
        description: career.description,
        updated_at: career.updated_at
    }
}