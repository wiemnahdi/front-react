export const server_uri = 'http://localhost:8080/api/v1';


const Role = {
    ADMIN: {
        dashboard: 'dashboard',
        departement: 'departement',
        users: 'users',
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
        team: 'team',
        notation: 'notation',
        certificate:'certificate',
    },

    TEAM_LEADER: {
        dashboard: 'dashboard',
        competence: 'competence',
        notation: 'notation',
        formation: 'formation',
        employe: 'employe',
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