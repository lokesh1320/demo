import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class sampledata {
  @JsonProperty('firstname', String, true)
  public firstname: string = undefined;

  @JsonProperty('lastname', String, true)
  public lastname: string = undefined;

  @JsonProperty('age', Number, true)
  public age: number = undefined;

}