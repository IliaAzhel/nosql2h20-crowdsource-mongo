import {
  Getters,
  Mutations,
  Actions,
  Module,
  createMapper
} from 'vuex-smart-module'
import CustomerAPI from "@/api/customer";

export interface FileManual {
  valueAnswer: string
  fileValue: any
}

class CustomerState {
  dataManualFile: FileManual[] = []
  fileValue: any = null
}

class CustomerGetters extends Getters<CustomerState> {
  // TODO
}

class CustomerMutations extends Mutations<CustomerState> {
  // TODO
}

class CustomerActions extends Actions<
    CustomerState,
    CustomerGetters,
    CustomerMutations,
    CustomerActions
> {
}

export const customer = new Module({
  state: CustomerState,
  getters: CustomerGetters,
  mutations: CustomerMutations,
  actions: CustomerActions
})

export const customerMapper = createMapper(customer)
