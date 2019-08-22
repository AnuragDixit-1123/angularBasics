
/**
 * It can as it is used as the service class
 */
export class LoggingService {

    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);

    }
}