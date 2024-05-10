export const server_uri = 'http://localhost:8080/api/v1';


const Role = {
    USER: {
        dashboard: 'dashboard',
        profile:'profile',
    },

    ADMIN: {
        dashboard: 'dashboard',
        profile:'profile',
        departement: 'departement',
        teamleader: 'teamleader',
        team: 'team',
        employe: 'employe',
        notation: 'notation',
        competence: 'competence',
        formation: 'formation',
        certificate:'certificate',
        adduser:'addUser'
    },

    DEPARTEMENT_CHEF: {
        dashboard: 'dashboard',
        profile:'profile',
        team: 'team',
        teamleader: 'teamleader',
        formation: 'formation'
    },

    TEAM_LEADER: {
        dashboard: 'dashboard',
        profile:'profile',
        competence: 'competence',
        notation: 'notation',
        formation: 'formation',
        employe: 'employe',
        certificate: 'certificate',
    },

    EMPLOYE: {
        dashboard: 'dashboard',
        profile:'profile',
        certificate: 'certificate'
    }
}

export const isAuthorize = (element, currentRole) => {
    const role = Role[currentRole?.toUpperCase()]; 
    return role && role.hasOwnProperty(element.toLowerCase());
};