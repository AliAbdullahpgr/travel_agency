
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Inquiry
 * 
 */
export type Inquiry = $Result.DefaultSelection<Prisma.$InquiryPayload>
/**
 * Model CmsSection
 * 
 */
export type CmsSection = $Result.DefaultSelection<Prisma.$CmsSectionPayload>
/**
 * Model Tour
 * 
 */
export type Tour = $Result.DefaultSelection<Prisma.$TourPayload>
/**
 * Model TourBadge
 * 
 */
export type TourBadge = $Result.DefaultSelection<Prisma.$TourBadgePayload>
/**
 * Model TourItineraryStep
 * 
 */
export type TourItineraryStep = $Result.DefaultSelection<Prisma.$TourItineraryStepPayload>
/**
 * Model TourInclude
 * 
 */
export type TourInclude = $Result.DefaultSelection<Prisma.$TourIncludePayload>
/**
 * Model TourExclude
 * 
 */
export type TourExclude = $Result.DefaultSelection<Prisma.$TourExcludePayload>
/**
 * Model TourFaq
 * 
 */
export type TourFaq = $Result.DefaultSelection<Prisma.$TourFaqPayload>
/**
 * Model TourGalleryImage
 * 
 */
export type TourGalleryImage = $Result.DefaultSelection<Prisma.$TourGalleryImagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AdminRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  EDITOR: 'EDITOR'
};

export type AdminRole = (typeof AdminRole)[keyof typeof AdminRole]


export const TourCategory: {
  umre: 'umre',
  hac: 'hac',
  kultur: 'kultur'
};

export type TourCategory = (typeof TourCategory)[keyof typeof TourCategory]


export const TourCurrency: {
  TRY: 'TRY',
  USD: 'USD',
  EUR: 'EUR'
};

export type TourCurrency = (typeof TourCurrency)[keyof typeof TourCurrency]

}

export type AdminRole = $Enums.AdminRole

export const AdminRole: typeof $Enums.AdminRole

export type TourCategory = $Enums.TourCategory

export const TourCategory: typeof $Enums.TourCategory

export type TourCurrency = $Enums.TourCurrency

export const TourCurrency: typeof $Enums.TourCurrency

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inquiry`: Exposes CRUD operations for the **Inquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inquiries
    * const inquiries = await prisma.inquiry.findMany()
    * ```
    */
  get inquiry(): Prisma.InquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsSection`: Exposes CRUD operations for the **CmsSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsSections
    * const cmsSections = await prisma.cmsSection.findMany()
    * ```
    */
  get cmsSection(): Prisma.CmsSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tour`: Exposes CRUD operations for the **Tour** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tours
    * const tours = await prisma.tour.findMany()
    * ```
    */
  get tour(): Prisma.TourDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourBadge`: Exposes CRUD operations for the **TourBadge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourBadges
    * const tourBadges = await prisma.tourBadge.findMany()
    * ```
    */
  get tourBadge(): Prisma.TourBadgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourItineraryStep`: Exposes CRUD operations for the **TourItineraryStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourItinerarySteps
    * const tourItinerarySteps = await prisma.tourItineraryStep.findMany()
    * ```
    */
  get tourItineraryStep(): Prisma.TourItineraryStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourInclude`: Exposes CRUD operations for the **TourInclude** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourIncludes
    * const tourIncludes = await prisma.tourInclude.findMany()
    * ```
    */
  get tourInclude(): Prisma.TourIncludeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourExclude`: Exposes CRUD operations for the **TourExclude** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourExcludes
    * const tourExcludes = await prisma.tourExclude.findMany()
    * ```
    */
  get tourExclude(): Prisma.TourExcludeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourFaq`: Exposes CRUD operations for the **TourFaq** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourFaqs
    * const tourFaqs = await prisma.tourFaq.findMany()
    * ```
    */
  get tourFaq(): Prisma.TourFaqDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourGalleryImage`: Exposes CRUD operations for the **TourGalleryImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourGalleryImages
    * const tourGalleryImages = await prisma.tourGalleryImage.findMany()
    * ```
    */
  get tourGalleryImage(): Prisma.TourGalleryImageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Post: 'Post',
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Inquiry: 'Inquiry',
    CmsSection: 'CmsSection',
    Tour: 'Tour',
    TourBadge: 'TourBadge',
    TourItineraryStep: 'TourItineraryStep',
    TourInclude: 'TourInclude',
    TourExclude: 'TourExclude',
    TourFaq: 'TourFaq',
    TourGalleryImage: 'TourGalleryImage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "account" | "session" | "user" | "verificationToken" | "inquiry" | "cmsSection" | "tour" | "tourBadge" | "tourItineraryStep" | "tourInclude" | "tourExclude" | "tourFaq" | "tourGalleryImage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Inquiry: {
        payload: Prisma.$InquiryPayload<ExtArgs>
        fields: Prisma.InquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          findFirst: {
            args: Prisma.InquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          findMany: {
            args: Prisma.InquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          create: {
            args: Prisma.InquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          createMany: {
            args: Prisma.InquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InquiryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          delete: {
            args: Prisma.InquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          update: {
            args: Prisma.InquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          deleteMany: {
            args: Prisma.InquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InquiryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          upsert: {
            args: Prisma.InquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          aggregate: {
            args: Prisma.InquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInquiry>
          }
          groupBy: {
            args: Prisma.InquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InquiryCountArgs<ExtArgs>
            result: $Utils.Optional<InquiryCountAggregateOutputType> | number
          }
        }
      }
      CmsSection: {
        payload: Prisma.$CmsSectionPayload<ExtArgs>
        fields: Prisma.CmsSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload>
          }
          findFirst: {
            args: Prisma.CmsSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload>
          }
          findMany: {
            args: Prisma.CmsSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload>[]
          }
          create: {
            args: Prisma.CmsSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload>
          }
          createMany: {
            args: Prisma.CmsSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload>[]
          }
          delete: {
            args: Prisma.CmsSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload>
          }
          update: {
            args: Prisma.CmsSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload>
          }
          deleteMany: {
            args: Prisma.CmsSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload>[]
          }
          upsert: {
            args: Prisma.CmsSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload>
          }
          aggregate: {
            args: Prisma.CmsSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsSection>
          }
          groupBy: {
            args: Prisma.CmsSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsSectionCountArgs<ExtArgs>
            result: $Utils.Optional<CmsSectionCountAggregateOutputType> | number
          }
        }
      }
      Tour: {
        payload: Prisma.$TourPayload<ExtArgs>
        fields: Prisma.TourFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          findFirst: {
            args: Prisma.TourFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          findMany: {
            args: Prisma.TourFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          create: {
            args: Prisma.TourCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          createMany: {
            args: Prisma.TourCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          delete: {
            args: Prisma.TourDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          update: {
            args: Prisma.TourUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          deleteMany: {
            args: Prisma.TourDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          upsert: {
            args: Prisma.TourUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          aggregate: {
            args: Prisma.TourAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTour>
          }
          groupBy: {
            args: Prisma.TourGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourCountArgs<ExtArgs>
            result: $Utils.Optional<TourCountAggregateOutputType> | number
          }
        }
      }
      TourBadge: {
        payload: Prisma.$TourBadgePayload<ExtArgs>
        fields: Prisma.TourBadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourBadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourBadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourBadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourBadgePayload>
          }
          findFirst: {
            args: Prisma.TourBadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourBadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourBadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourBadgePayload>
          }
          findMany: {
            args: Prisma.TourBadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourBadgePayload>[]
          }
          create: {
            args: Prisma.TourBadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourBadgePayload>
          }
          createMany: {
            args: Prisma.TourBadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourBadgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourBadgePayload>[]
          }
          delete: {
            args: Prisma.TourBadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourBadgePayload>
          }
          update: {
            args: Prisma.TourBadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourBadgePayload>
          }
          deleteMany: {
            args: Prisma.TourBadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourBadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourBadgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourBadgePayload>[]
          }
          upsert: {
            args: Prisma.TourBadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourBadgePayload>
          }
          aggregate: {
            args: Prisma.TourBadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourBadge>
          }
          groupBy: {
            args: Prisma.TourBadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourBadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourBadgeCountArgs<ExtArgs>
            result: $Utils.Optional<TourBadgeCountAggregateOutputType> | number
          }
        }
      }
      TourItineraryStep: {
        payload: Prisma.$TourItineraryStepPayload<ExtArgs>
        fields: Prisma.TourItineraryStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourItineraryStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourItineraryStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourItineraryStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourItineraryStepPayload>
          }
          findFirst: {
            args: Prisma.TourItineraryStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourItineraryStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourItineraryStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourItineraryStepPayload>
          }
          findMany: {
            args: Prisma.TourItineraryStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourItineraryStepPayload>[]
          }
          create: {
            args: Prisma.TourItineraryStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourItineraryStepPayload>
          }
          createMany: {
            args: Prisma.TourItineraryStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourItineraryStepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourItineraryStepPayload>[]
          }
          delete: {
            args: Prisma.TourItineraryStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourItineraryStepPayload>
          }
          update: {
            args: Prisma.TourItineraryStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourItineraryStepPayload>
          }
          deleteMany: {
            args: Prisma.TourItineraryStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourItineraryStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourItineraryStepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourItineraryStepPayload>[]
          }
          upsert: {
            args: Prisma.TourItineraryStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourItineraryStepPayload>
          }
          aggregate: {
            args: Prisma.TourItineraryStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourItineraryStep>
          }
          groupBy: {
            args: Prisma.TourItineraryStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourItineraryStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourItineraryStepCountArgs<ExtArgs>
            result: $Utils.Optional<TourItineraryStepCountAggregateOutputType> | number
          }
        }
      }
      TourInclude: {
        payload: Prisma.$TourIncludePayload<ExtArgs>
        fields: Prisma.TourIncludeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourIncludeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourIncludePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourIncludeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourIncludePayload>
          }
          findFirst: {
            args: Prisma.TourIncludeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourIncludePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourIncludeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourIncludePayload>
          }
          findMany: {
            args: Prisma.TourIncludeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourIncludePayload>[]
          }
          create: {
            args: Prisma.TourIncludeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourIncludePayload>
          }
          createMany: {
            args: Prisma.TourIncludeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourIncludeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourIncludePayload>[]
          }
          delete: {
            args: Prisma.TourIncludeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourIncludePayload>
          }
          update: {
            args: Prisma.TourIncludeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourIncludePayload>
          }
          deleteMany: {
            args: Prisma.TourIncludeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourIncludeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourIncludeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourIncludePayload>[]
          }
          upsert: {
            args: Prisma.TourIncludeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourIncludePayload>
          }
          aggregate: {
            args: Prisma.TourIncludeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourInclude>
          }
          groupBy: {
            args: Prisma.TourIncludeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourIncludeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourIncludeCountArgs<ExtArgs>
            result: $Utils.Optional<TourIncludeCountAggregateOutputType> | number
          }
        }
      }
      TourExclude: {
        payload: Prisma.$TourExcludePayload<ExtArgs>
        fields: Prisma.TourExcludeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourExcludeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourExcludePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourExcludeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourExcludePayload>
          }
          findFirst: {
            args: Prisma.TourExcludeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourExcludePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourExcludeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourExcludePayload>
          }
          findMany: {
            args: Prisma.TourExcludeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourExcludePayload>[]
          }
          create: {
            args: Prisma.TourExcludeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourExcludePayload>
          }
          createMany: {
            args: Prisma.TourExcludeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourExcludeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourExcludePayload>[]
          }
          delete: {
            args: Prisma.TourExcludeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourExcludePayload>
          }
          update: {
            args: Prisma.TourExcludeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourExcludePayload>
          }
          deleteMany: {
            args: Prisma.TourExcludeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourExcludeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourExcludeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourExcludePayload>[]
          }
          upsert: {
            args: Prisma.TourExcludeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourExcludePayload>
          }
          aggregate: {
            args: Prisma.TourExcludeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourExclude>
          }
          groupBy: {
            args: Prisma.TourExcludeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourExcludeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourExcludeCountArgs<ExtArgs>
            result: $Utils.Optional<TourExcludeCountAggregateOutputType> | number
          }
        }
      }
      TourFaq: {
        payload: Prisma.$TourFaqPayload<ExtArgs>
        fields: Prisma.TourFaqFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourFaqFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourFaqPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourFaqFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourFaqPayload>
          }
          findFirst: {
            args: Prisma.TourFaqFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourFaqPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourFaqFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourFaqPayload>
          }
          findMany: {
            args: Prisma.TourFaqFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourFaqPayload>[]
          }
          create: {
            args: Prisma.TourFaqCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourFaqPayload>
          }
          createMany: {
            args: Prisma.TourFaqCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourFaqCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourFaqPayload>[]
          }
          delete: {
            args: Prisma.TourFaqDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourFaqPayload>
          }
          update: {
            args: Prisma.TourFaqUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourFaqPayload>
          }
          deleteMany: {
            args: Prisma.TourFaqDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourFaqUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourFaqUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourFaqPayload>[]
          }
          upsert: {
            args: Prisma.TourFaqUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourFaqPayload>
          }
          aggregate: {
            args: Prisma.TourFaqAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourFaq>
          }
          groupBy: {
            args: Prisma.TourFaqGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourFaqGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourFaqCountArgs<ExtArgs>
            result: $Utils.Optional<TourFaqCountAggregateOutputType> | number
          }
        }
      }
      TourGalleryImage: {
        payload: Prisma.$TourGalleryImagePayload<ExtArgs>
        fields: Prisma.TourGalleryImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourGalleryImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourGalleryImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourGalleryImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourGalleryImagePayload>
          }
          findFirst: {
            args: Prisma.TourGalleryImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourGalleryImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourGalleryImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourGalleryImagePayload>
          }
          findMany: {
            args: Prisma.TourGalleryImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourGalleryImagePayload>[]
          }
          create: {
            args: Prisma.TourGalleryImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourGalleryImagePayload>
          }
          createMany: {
            args: Prisma.TourGalleryImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourGalleryImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourGalleryImagePayload>[]
          }
          delete: {
            args: Prisma.TourGalleryImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourGalleryImagePayload>
          }
          update: {
            args: Prisma.TourGalleryImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourGalleryImagePayload>
          }
          deleteMany: {
            args: Prisma.TourGalleryImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourGalleryImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourGalleryImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourGalleryImagePayload>[]
          }
          upsert: {
            args: Prisma.TourGalleryImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourGalleryImagePayload>
          }
          aggregate: {
            args: Prisma.TourGalleryImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourGalleryImage>
          }
          groupBy: {
            args: Prisma.TourGalleryImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourGalleryImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourGalleryImageCountArgs<ExtArgs>
            result: $Utils.Optional<TourGalleryImageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    post?: PostOmit
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    inquiry?: InquiryOmit
    cmsSection?: CmsSectionOmit
    tour?: TourOmit
    tourBadge?: TourBadgeOmit
    tourItineraryStep?: TourItineraryStepOmit
    tourInclude?: TourIncludeOmit
    tourExclude?: TourExcludeOmit
    tourFaq?: TourFaqOmit
    tourGalleryImage?: TourGalleryImageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    posts: number
    cmsSections: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    cmsSections?: boolean | UserCountOutputTypeCountCmsSectionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCmsSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsSectionWhereInput
  }


  /**
   * Count Type TourCountOutputType
   */

  export type TourCountOutputType = {
    badges: number
    itinerarySteps: number
    includes: number
    excludes: number
    faqs: number
    galleryImages: number
  }

  export type TourCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badges?: boolean | TourCountOutputTypeCountBadgesArgs
    itinerarySteps?: boolean | TourCountOutputTypeCountItineraryStepsArgs
    includes?: boolean | TourCountOutputTypeCountIncludesArgs
    excludes?: boolean | TourCountOutputTypeCountExcludesArgs
    faqs?: boolean | TourCountOutputTypeCountFaqsArgs
    galleryImages?: boolean | TourCountOutputTypeCountGalleryImagesArgs
  }

  // Custom InputTypes
  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourCountOutputType
     */
    select?: TourCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourBadgeWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountItineraryStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourItineraryStepWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountIncludesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourIncludeWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountExcludesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourExcludeWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountFaqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourFaqWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountGalleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourGalleryImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly name: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly createdById: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    refresh_token_expires_in: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "refresh_token_expires_in", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      refresh_token_expires_in: number | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    username: string | null
    passwordHash: string | null
    role: $Enums.AdminRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    username: string | null
    passwordHash: string | null
    role: $Enums.AdminRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    username: number
    passwordHash: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    username: string | null
    passwordHash: string | null
    role: $Enums.AdminRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    cmsSections?: boolean | User$cmsSectionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "username" | "passwordHash" | "role" | "isActive" | "createdAt" | "updatedAt" | "emailVerified" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    cmsSections?: boolean | User$cmsSectionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      cmsSections: Prisma.$CmsSectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      username: string | null
      passwordHash: string | null
      role: $Enums.AdminRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      emailVerified: Date | null
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cmsSections<T extends User$cmsSectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$cmsSectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'AdminRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.cmsSections
   */
  export type User$cmsSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
    where?: CmsSectionWhereInput
    orderBy?: CmsSectionOrderByWithRelationInput | CmsSectionOrderByWithRelationInput[]
    cursor?: CmsSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsSectionScalarFieldEnum | CmsSectionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Inquiry
   */

  export type AggregateInquiry = {
    _count: InquiryCountAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  export type InquiryMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    phone: string | null
    plannedMonth: string | null
    consentAccepted: boolean | null
    createdAt: Date | null
  }

  export type InquiryMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    phone: string | null
    plannedMonth: string | null
    consentAccepted: boolean | null
    createdAt: Date | null
  }

  export type InquiryCountAggregateOutputType = {
    id: number
    fullName: number
    phone: number
    plannedMonth: number
    consentAccepted: number
    createdAt: number
    _all: number
  }


  export type InquiryMinAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    plannedMonth?: true
    consentAccepted?: true
    createdAt?: true
  }

  export type InquiryMaxAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    plannedMonth?: true
    consentAccepted?: true
    createdAt?: true
  }

  export type InquiryCountAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    plannedMonth?: true
    consentAccepted?: true
    createdAt?: true
    _all?: true
  }

  export type InquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquiry to aggregate.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inquiries
    **/
    _count?: true | InquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InquiryMaxAggregateInputType
  }

  export type GetInquiryAggregateType<T extends InquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateInquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInquiry[P]>
      : GetScalarType<T[P], AggregateInquiry[P]>
  }




  export type InquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryWhereInput
    orderBy?: InquiryOrderByWithAggregationInput | InquiryOrderByWithAggregationInput[]
    by: InquiryScalarFieldEnum[] | InquiryScalarFieldEnum
    having?: InquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InquiryCountAggregateInputType | true
    _min?: InquiryMinAggregateInputType
    _max?: InquiryMaxAggregateInputType
  }

  export type InquiryGroupByOutputType = {
    id: string
    fullName: string
    phone: string
    plannedMonth: string
    consentAccepted: boolean
    createdAt: Date
    _count: InquiryCountAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  type GetInquiryGroupByPayload<T extends InquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InquiryGroupByOutputType[P]>
            : GetScalarType<T[P], InquiryGroupByOutputType[P]>
        }
      >
    >


  export type InquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    plannedMonth?: boolean
    consentAccepted?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["inquiry"]>

  export type InquirySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    plannedMonth?: boolean
    consentAccepted?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["inquiry"]>

  export type InquirySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    plannedMonth?: boolean
    consentAccepted?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["inquiry"]>

  export type InquirySelectScalar = {
    id?: boolean
    fullName?: boolean
    phone?: boolean
    plannedMonth?: boolean
    consentAccepted?: boolean
    createdAt?: boolean
  }

  export type InquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "phone" | "plannedMonth" | "consentAccepted" | "createdAt", ExtArgs["result"]["inquiry"]>

  export type $InquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inquiry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      phone: string
      plannedMonth: string
      consentAccepted: boolean
      createdAt: Date
    }, ExtArgs["result"]["inquiry"]>
    composites: {}
  }

  type InquiryGetPayload<S extends boolean | null | undefined | InquiryDefaultArgs> = $Result.GetResult<Prisma.$InquiryPayload, S>

  type InquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InquiryCountAggregateInputType | true
    }

  export interface InquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inquiry'], meta: { name: 'Inquiry' } }
    /**
     * Find zero or one Inquiry that matches the filter.
     * @param {InquiryFindUniqueArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InquiryFindUniqueArgs>(args: SelectSubset<T, InquiryFindUniqueArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InquiryFindUniqueOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, InquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InquiryFindFirstArgs>(args?: SelectSubset<T, InquiryFindFirstArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, InquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inquiries
     * const inquiries = await prisma.inquiry.findMany()
     * 
     * // Get first 10 Inquiries
     * const inquiries = await prisma.inquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InquiryFindManyArgs>(args?: SelectSubset<T, InquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inquiry.
     * @param {InquiryCreateArgs} args - Arguments to create a Inquiry.
     * @example
     * // Create one Inquiry
     * const Inquiry = await prisma.inquiry.create({
     *   data: {
     *     // ... data to create a Inquiry
     *   }
     * })
     * 
     */
    create<T extends InquiryCreateArgs>(args: SelectSubset<T, InquiryCreateArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inquiries.
     * @param {InquiryCreateManyArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InquiryCreateManyArgs>(args?: SelectSubset<T, InquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inquiries and returns the data saved in the database.
     * @param {InquiryCreateManyAndReturnArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inquiries and only return the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InquiryCreateManyAndReturnArgs>(args?: SelectSubset<T, InquiryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inquiry.
     * @param {InquiryDeleteArgs} args - Arguments to delete one Inquiry.
     * @example
     * // Delete one Inquiry
     * const Inquiry = await prisma.inquiry.delete({
     *   where: {
     *     // ... filter to delete one Inquiry
     *   }
     * })
     * 
     */
    delete<T extends InquiryDeleteArgs>(args: SelectSubset<T, InquiryDeleteArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inquiry.
     * @param {InquiryUpdateArgs} args - Arguments to update one Inquiry.
     * @example
     * // Update one Inquiry
     * const inquiry = await prisma.inquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InquiryUpdateArgs>(args: SelectSubset<T, InquiryUpdateArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inquiries.
     * @param {InquiryDeleteManyArgs} args - Arguments to filter Inquiries to delete.
     * @example
     * // Delete a few Inquiries
     * const { count } = await prisma.inquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InquiryDeleteManyArgs>(args?: SelectSubset<T, InquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inquiries
     * const inquiry = await prisma.inquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InquiryUpdateManyArgs>(args: SelectSubset<T, InquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inquiries and returns the data updated in the database.
     * @param {InquiryUpdateManyAndReturnArgs} args - Arguments to update many Inquiries.
     * @example
     * // Update many Inquiries
     * const inquiry = await prisma.inquiry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inquiries and only return the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InquiryUpdateManyAndReturnArgs>(args: SelectSubset<T, InquiryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inquiry.
     * @param {InquiryUpsertArgs} args - Arguments to update or create a Inquiry.
     * @example
     * // Update or create a Inquiry
     * const inquiry = await prisma.inquiry.upsert({
     *   create: {
     *     // ... data to create a Inquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inquiry we want to update
     *   }
     * })
     */
    upsert<T extends InquiryUpsertArgs>(args: SelectSubset<T, InquiryUpsertArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryCountArgs} args - Arguments to filter Inquiries to count.
     * @example
     * // Count the number of Inquiries
     * const count = await prisma.inquiry.count({
     *   where: {
     *     // ... the filter for the Inquiries we want to count
     *   }
     * })
    **/
    count<T extends InquiryCountArgs>(
      args?: Subset<T, InquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InquiryAggregateArgs>(args: Subset<T, InquiryAggregateArgs>): Prisma.PrismaPromise<GetInquiryAggregateType<T>>

    /**
     * Group by Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InquiryGroupByArgs['orderBy'] }
        : { orderBy?: InquiryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inquiry model
   */
  readonly fields: InquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inquiry model
   */
  interface InquiryFieldRefs {
    readonly id: FieldRef<"Inquiry", 'String'>
    readonly fullName: FieldRef<"Inquiry", 'String'>
    readonly phone: FieldRef<"Inquiry", 'String'>
    readonly plannedMonth: FieldRef<"Inquiry", 'String'>
    readonly consentAccepted: FieldRef<"Inquiry", 'Boolean'>
    readonly createdAt: FieldRef<"Inquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inquiry findUnique
   */
  export type InquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry findUniqueOrThrow
   */
  export type InquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry findFirst
   */
  export type InquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry findFirstOrThrow
   */
  export type InquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry findMany
   */
  export type InquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter, which Inquiries to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry create
   */
  export type InquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The data needed to create a Inquiry.
     */
    data: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>
  }

  /**
   * Inquiry createMany
   */
  export type InquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inquiries.
     */
    data: InquiryCreateManyInput | InquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inquiry createManyAndReturn
   */
  export type InquiryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The data used to create many Inquiries.
     */
    data: InquiryCreateManyInput | InquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inquiry update
   */
  export type InquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The data needed to update a Inquiry.
     */
    data: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>
    /**
     * Choose, which Inquiry to update.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry updateMany
   */
  export type InquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inquiries.
     */
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyInput>
    /**
     * Filter which Inquiries to update
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to update.
     */
    limit?: number
  }

  /**
   * Inquiry updateManyAndReturn
   */
  export type InquiryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The data used to update Inquiries.
     */
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyInput>
    /**
     * Filter which Inquiries to update
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to update.
     */
    limit?: number
  }

  /**
   * Inquiry upsert
   */
  export type InquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The filter to search for the Inquiry to update in case it exists.
     */
    where: InquiryWhereUniqueInput
    /**
     * In case the Inquiry found by the `where` argument doesn't exist, create a new Inquiry with this data.
     */
    create: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>
    /**
     * In case the Inquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>
  }

  /**
   * Inquiry delete
   */
  export type InquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter which Inquiry to delete.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry deleteMany
   */
  export type InquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquiries to delete
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to delete.
     */
    limit?: number
  }

  /**
   * Inquiry without action
   */
  export type InquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
  }


  /**
   * Model CmsSection
   */

  export type AggregateCmsSection = {
    _count: CmsSectionCountAggregateOutputType | null
    _min: CmsSectionMinAggregateOutputType | null
    _max: CmsSectionMaxAggregateOutputType | null
  }

  export type CmsSectionMinAggregateOutputType = {
    id: string | null
    key: string | null
    updatedAt: Date | null
    updatedById: string | null
  }

  export type CmsSectionMaxAggregateOutputType = {
    id: string | null
    key: string | null
    updatedAt: Date | null
    updatedById: string | null
  }

  export type CmsSectionCountAggregateOutputType = {
    id: number
    key: number
    data: number
    updatedAt: number
    updatedById: number
    _all: number
  }


  export type CmsSectionMinAggregateInputType = {
    id?: true
    key?: true
    updatedAt?: true
    updatedById?: true
  }

  export type CmsSectionMaxAggregateInputType = {
    id?: true
    key?: true
    updatedAt?: true
    updatedById?: true
  }

  export type CmsSectionCountAggregateInputType = {
    id?: true
    key?: true
    data?: true
    updatedAt?: true
    updatedById?: true
    _all?: true
  }

  export type CmsSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsSection to aggregate.
     */
    where?: CmsSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSections to fetch.
     */
    orderBy?: CmsSectionOrderByWithRelationInput | CmsSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsSections
    **/
    _count?: true | CmsSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsSectionMaxAggregateInputType
  }

  export type GetCmsSectionAggregateType<T extends CmsSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsSection[P]>
      : GetScalarType<T[P], AggregateCmsSection[P]>
  }




  export type CmsSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsSectionWhereInput
    orderBy?: CmsSectionOrderByWithAggregationInput | CmsSectionOrderByWithAggregationInput[]
    by: CmsSectionScalarFieldEnum[] | CmsSectionScalarFieldEnum
    having?: CmsSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsSectionCountAggregateInputType | true
    _min?: CmsSectionMinAggregateInputType
    _max?: CmsSectionMaxAggregateInputType
  }

  export type CmsSectionGroupByOutputType = {
    id: string
    key: string
    data: JsonValue
    updatedAt: Date
    updatedById: string | null
    _count: CmsSectionCountAggregateOutputType | null
    _min: CmsSectionMinAggregateOutputType | null
    _max: CmsSectionMaxAggregateOutputType | null
  }

  type GetCmsSectionGroupByPayload<T extends CmsSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsSectionGroupByOutputType[P]>
            : GetScalarType<T[P], CmsSectionGroupByOutputType[P]>
        }
      >
    >


  export type CmsSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    data?: boolean
    updatedAt?: boolean
    updatedById?: boolean
    updatedBy?: boolean | CmsSection$updatedByArgs<ExtArgs>
  }, ExtArgs["result"]["cmsSection"]>

  export type CmsSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    data?: boolean
    updatedAt?: boolean
    updatedById?: boolean
    updatedBy?: boolean | CmsSection$updatedByArgs<ExtArgs>
  }, ExtArgs["result"]["cmsSection"]>

  export type CmsSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    data?: boolean
    updatedAt?: boolean
    updatedById?: boolean
    updatedBy?: boolean | CmsSection$updatedByArgs<ExtArgs>
  }, ExtArgs["result"]["cmsSection"]>

  export type CmsSectionSelectScalar = {
    id?: boolean
    key?: boolean
    data?: boolean
    updatedAt?: boolean
    updatedById?: boolean
  }

  export type CmsSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "data" | "updatedAt" | "updatedById", ExtArgs["result"]["cmsSection"]>
  export type CmsSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    updatedBy?: boolean | CmsSection$updatedByArgs<ExtArgs>
  }
  export type CmsSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    updatedBy?: boolean | CmsSection$updatedByArgs<ExtArgs>
  }
  export type CmsSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    updatedBy?: boolean | CmsSection$updatedByArgs<ExtArgs>
  }

  export type $CmsSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsSection"
    objects: {
      updatedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      data: Prisma.JsonValue
      updatedAt: Date
      updatedById: string | null
    }, ExtArgs["result"]["cmsSection"]>
    composites: {}
  }

  type CmsSectionGetPayload<S extends boolean | null | undefined | CmsSectionDefaultArgs> = $Result.GetResult<Prisma.$CmsSectionPayload, S>

  type CmsSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsSectionCountAggregateInputType | true
    }

  export interface CmsSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsSection'], meta: { name: 'CmsSection' } }
    /**
     * Find zero or one CmsSection that matches the filter.
     * @param {CmsSectionFindUniqueArgs} args - Arguments to find a CmsSection
     * @example
     * // Get one CmsSection
     * const cmsSection = await prisma.cmsSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsSectionFindUniqueArgs>(args: SelectSubset<T, CmsSectionFindUniqueArgs<ExtArgs>>): Prisma__CmsSectionClient<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsSectionFindUniqueOrThrowArgs} args - Arguments to find a CmsSection
     * @example
     * // Get one CmsSection
     * const cmsSection = await prisma.cmsSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsSectionClient<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSectionFindFirstArgs} args - Arguments to find a CmsSection
     * @example
     * // Get one CmsSection
     * const cmsSection = await prisma.cmsSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsSectionFindFirstArgs>(args?: SelectSubset<T, CmsSectionFindFirstArgs<ExtArgs>>): Prisma__CmsSectionClient<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSectionFindFirstOrThrowArgs} args - Arguments to find a CmsSection
     * @example
     * // Get one CmsSection
     * const cmsSection = await prisma.cmsSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsSectionClient<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsSections
     * const cmsSections = await prisma.cmsSection.findMany()
     * 
     * // Get first 10 CmsSections
     * const cmsSections = await prisma.cmsSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsSectionWithIdOnly = await prisma.cmsSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsSectionFindManyArgs>(args?: SelectSubset<T, CmsSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsSection.
     * @param {CmsSectionCreateArgs} args - Arguments to create a CmsSection.
     * @example
     * // Create one CmsSection
     * const CmsSection = await prisma.cmsSection.create({
     *   data: {
     *     // ... data to create a CmsSection
     *   }
     * })
     * 
     */
    create<T extends CmsSectionCreateArgs>(args: SelectSubset<T, CmsSectionCreateArgs<ExtArgs>>): Prisma__CmsSectionClient<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsSections.
     * @param {CmsSectionCreateManyArgs} args - Arguments to create many CmsSections.
     * @example
     * // Create many CmsSections
     * const cmsSection = await prisma.cmsSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsSectionCreateManyArgs>(args?: SelectSubset<T, CmsSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsSections and returns the data saved in the database.
     * @param {CmsSectionCreateManyAndReturnArgs} args - Arguments to create many CmsSections.
     * @example
     * // Create many CmsSections
     * const cmsSection = await prisma.cmsSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsSections and only return the `id`
     * const cmsSectionWithIdOnly = await prisma.cmsSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsSection.
     * @param {CmsSectionDeleteArgs} args - Arguments to delete one CmsSection.
     * @example
     * // Delete one CmsSection
     * const CmsSection = await prisma.cmsSection.delete({
     *   where: {
     *     // ... filter to delete one CmsSection
     *   }
     * })
     * 
     */
    delete<T extends CmsSectionDeleteArgs>(args: SelectSubset<T, CmsSectionDeleteArgs<ExtArgs>>): Prisma__CmsSectionClient<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsSection.
     * @param {CmsSectionUpdateArgs} args - Arguments to update one CmsSection.
     * @example
     * // Update one CmsSection
     * const cmsSection = await prisma.cmsSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsSectionUpdateArgs>(args: SelectSubset<T, CmsSectionUpdateArgs<ExtArgs>>): Prisma__CmsSectionClient<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsSections.
     * @param {CmsSectionDeleteManyArgs} args - Arguments to filter CmsSections to delete.
     * @example
     * // Delete a few CmsSections
     * const { count } = await prisma.cmsSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsSectionDeleteManyArgs>(args?: SelectSubset<T, CmsSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsSections
     * const cmsSection = await prisma.cmsSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsSectionUpdateManyArgs>(args: SelectSubset<T, CmsSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsSections and returns the data updated in the database.
     * @param {CmsSectionUpdateManyAndReturnArgs} args - Arguments to update many CmsSections.
     * @example
     * // Update many CmsSections
     * const cmsSection = await prisma.cmsSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsSections and only return the `id`
     * const cmsSectionWithIdOnly = await prisma.cmsSection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CmsSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsSection.
     * @param {CmsSectionUpsertArgs} args - Arguments to update or create a CmsSection.
     * @example
     * // Update or create a CmsSection
     * const cmsSection = await prisma.cmsSection.upsert({
     *   create: {
     *     // ... data to create a CmsSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsSection we want to update
     *   }
     * })
     */
    upsert<T extends CmsSectionUpsertArgs>(args: SelectSubset<T, CmsSectionUpsertArgs<ExtArgs>>): Prisma__CmsSectionClient<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSectionCountArgs} args - Arguments to filter CmsSections to count.
     * @example
     * // Count the number of CmsSections
     * const count = await prisma.cmsSection.count({
     *   where: {
     *     // ... the filter for the CmsSections we want to count
     *   }
     * })
    **/
    count<T extends CmsSectionCountArgs>(
      args?: Subset<T, CmsSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CmsSectionAggregateArgs>(args: Subset<T, CmsSectionAggregateArgs>): Prisma.PrismaPromise<GetCmsSectionAggregateType<T>>

    /**
     * Group by CmsSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CmsSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsSectionGroupByArgs['orderBy'] }
        : { orderBy?: CmsSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CmsSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsSection model
   */
  readonly fields: CmsSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    updatedBy<T extends CmsSection$updatedByArgs<ExtArgs> = {}>(args?: Subset<T, CmsSection$updatedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CmsSection model
   */
  interface CmsSectionFieldRefs {
    readonly id: FieldRef<"CmsSection", 'String'>
    readonly key: FieldRef<"CmsSection", 'String'>
    readonly data: FieldRef<"CmsSection", 'Json'>
    readonly updatedAt: FieldRef<"CmsSection", 'DateTime'>
    readonly updatedById: FieldRef<"CmsSection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CmsSection findUnique
   */
  export type CmsSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
    /**
     * Filter, which CmsSection to fetch.
     */
    where: CmsSectionWhereUniqueInput
  }

  /**
   * CmsSection findUniqueOrThrow
   */
  export type CmsSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
    /**
     * Filter, which CmsSection to fetch.
     */
    where: CmsSectionWhereUniqueInput
  }

  /**
   * CmsSection findFirst
   */
  export type CmsSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
    /**
     * Filter, which CmsSection to fetch.
     */
    where?: CmsSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSections to fetch.
     */
    orderBy?: CmsSectionOrderByWithRelationInput | CmsSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsSections.
     */
    cursor?: CmsSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsSections.
     */
    distinct?: CmsSectionScalarFieldEnum | CmsSectionScalarFieldEnum[]
  }

  /**
   * CmsSection findFirstOrThrow
   */
  export type CmsSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
    /**
     * Filter, which CmsSection to fetch.
     */
    where?: CmsSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSections to fetch.
     */
    orderBy?: CmsSectionOrderByWithRelationInput | CmsSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsSections.
     */
    cursor?: CmsSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsSections.
     */
    distinct?: CmsSectionScalarFieldEnum | CmsSectionScalarFieldEnum[]
  }

  /**
   * CmsSection findMany
   */
  export type CmsSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
    /**
     * Filter, which CmsSections to fetch.
     */
    where?: CmsSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSections to fetch.
     */
    orderBy?: CmsSectionOrderByWithRelationInput | CmsSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsSections.
     */
    cursor?: CmsSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSections.
     */
    skip?: number
    distinct?: CmsSectionScalarFieldEnum | CmsSectionScalarFieldEnum[]
  }

  /**
   * CmsSection create
   */
  export type CmsSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsSection.
     */
    data: XOR<CmsSectionCreateInput, CmsSectionUncheckedCreateInput>
  }

  /**
   * CmsSection createMany
   */
  export type CmsSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsSections.
     */
    data: CmsSectionCreateManyInput | CmsSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsSection createManyAndReturn
   */
  export type CmsSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * The data used to create many CmsSections.
     */
    data: CmsSectionCreateManyInput | CmsSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsSection update
   */
  export type CmsSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsSection.
     */
    data: XOR<CmsSectionUpdateInput, CmsSectionUncheckedUpdateInput>
    /**
     * Choose, which CmsSection to update.
     */
    where: CmsSectionWhereUniqueInput
  }

  /**
   * CmsSection updateMany
   */
  export type CmsSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsSections.
     */
    data: XOR<CmsSectionUpdateManyMutationInput, CmsSectionUncheckedUpdateManyInput>
    /**
     * Filter which CmsSections to update
     */
    where?: CmsSectionWhereInput
    /**
     * Limit how many CmsSections to update.
     */
    limit?: number
  }

  /**
   * CmsSection updateManyAndReturn
   */
  export type CmsSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * The data used to update CmsSections.
     */
    data: XOR<CmsSectionUpdateManyMutationInput, CmsSectionUncheckedUpdateManyInput>
    /**
     * Filter which CmsSections to update
     */
    where?: CmsSectionWhereInput
    /**
     * Limit how many CmsSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsSection upsert
   */
  export type CmsSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsSection to update in case it exists.
     */
    where: CmsSectionWhereUniqueInput
    /**
     * In case the CmsSection found by the `where` argument doesn't exist, create a new CmsSection with this data.
     */
    create: XOR<CmsSectionCreateInput, CmsSectionUncheckedCreateInput>
    /**
     * In case the CmsSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsSectionUpdateInput, CmsSectionUncheckedUpdateInput>
  }

  /**
   * CmsSection delete
   */
  export type CmsSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
    /**
     * Filter which CmsSection to delete.
     */
    where: CmsSectionWhereUniqueInput
  }

  /**
   * CmsSection deleteMany
   */
  export type CmsSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsSections to delete
     */
    where?: CmsSectionWhereInput
    /**
     * Limit how many CmsSections to delete.
     */
    limit?: number
  }

  /**
   * CmsSection.updatedBy
   */
  export type CmsSection$updatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * CmsSection without action
   */
  export type CmsSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
  }


  /**
   * Model Tour
   */

  export type AggregateTour = {
    _count: TourCountAggregateOutputType | null
    _avg: TourAvgAggregateOutputType | null
    _sum: TourSumAggregateOutputType | null
    _min: TourMinAggregateOutputType | null
    _max: TourMaxAggregateOutputType | null
  }

  export type TourAvgAggregateOutputType = {
    durationDays: number | null
    priceFrom: number | null
    landingFeaturedOrder: number | null
  }

  export type TourSumAggregateOutputType = {
    durationDays: number | null
    priceFrom: number | null
    landingFeaturedOrder: number | null
  }

  export type TourMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    category: $Enums.TourCategory | null
    durationDays: number | null
    priceFrom: number | null
    currency: $Enums.TourCurrency | null
    heroImage: string | null
    shortBlurb: string | null
    seoTitle: string | null
    seoDescription: string | null
    isPublished: boolean | null
    isLandingFeatured: boolean | null
    landingFeaturedOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TourMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    category: $Enums.TourCategory | null
    durationDays: number | null
    priceFrom: number | null
    currency: $Enums.TourCurrency | null
    heroImage: string | null
    shortBlurb: string | null
    seoTitle: string | null
    seoDescription: string | null
    isPublished: boolean | null
    isLandingFeatured: boolean | null
    landingFeaturedOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TourCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    category: number
    durationDays: number
    priceFrom: number
    currency: number
    heroImage: number
    shortBlurb: number
    seoTitle: number
    seoDescription: number
    isPublished: number
    isLandingFeatured: number
    landingFeaturedOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TourAvgAggregateInputType = {
    durationDays?: true
    priceFrom?: true
    landingFeaturedOrder?: true
  }

  export type TourSumAggregateInputType = {
    durationDays?: true
    priceFrom?: true
    landingFeaturedOrder?: true
  }

  export type TourMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    category?: true
    durationDays?: true
    priceFrom?: true
    currency?: true
    heroImage?: true
    shortBlurb?: true
    seoTitle?: true
    seoDescription?: true
    isPublished?: true
    isLandingFeatured?: true
    landingFeaturedOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TourMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    category?: true
    durationDays?: true
    priceFrom?: true
    currency?: true
    heroImage?: true
    shortBlurb?: true
    seoTitle?: true
    seoDescription?: true
    isPublished?: true
    isLandingFeatured?: true
    landingFeaturedOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TourCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    category?: true
    durationDays?: true
    priceFrom?: true
    currency?: true
    heroImage?: true
    shortBlurb?: true
    seoTitle?: true
    seoDescription?: true
    isPublished?: true
    isLandingFeatured?: true
    landingFeaturedOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TourAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tour to aggregate.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tours
    **/
    _count?: true | TourCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourMaxAggregateInputType
  }

  export type GetTourAggregateType<T extends TourAggregateArgs> = {
        [P in keyof T & keyof AggregateTour]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTour[P]>
      : GetScalarType<T[P], AggregateTour[P]>
  }




  export type TourGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourWhereInput
    orderBy?: TourOrderByWithAggregationInput | TourOrderByWithAggregationInput[]
    by: TourScalarFieldEnum[] | TourScalarFieldEnum
    having?: TourScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourCountAggregateInputType | true
    _avg?: TourAvgAggregateInputType
    _sum?: TourSumAggregateInputType
    _min?: TourMinAggregateInputType
    _max?: TourMaxAggregateInputType
  }

  export type TourGroupByOutputType = {
    id: string
    slug: string
    title: string
    category: $Enums.TourCategory
    durationDays: number
    priceFrom: number
    currency: $Enums.TourCurrency
    heroImage: string
    shortBlurb: string
    seoTitle: string
    seoDescription: string
    isPublished: boolean
    isLandingFeatured: boolean
    landingFeaturedOrder: number | null
    createdAt: Date
    updatedAt: Date
    _count: TourCountAggregateOutputType | null
    _avg: TourAvgAggregateOutputType | null
    _sum: TourSumAggregateOutputType | null
    _min: TourMinAggregateOutputType | null
    _max: TourMaxAggregateOutputType | null
  }

  type GetTourGroupByPayload<T extends TourGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourGroupByOutputType[P]>
            : GetScalarType<T[P], TourGroupByOutputType[P]>
        }
      >
    >


  export type TourSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    category?: boolean
    durationDays?: boolean
    priceFrom?: boolean
    currency?: boolean
    heroImage?: boolean
    shortBlurb?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    isPublished?: boolean
    isLandingFeatured?: boolean
    landingFeaturedOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    badges?: boolean | Tour$badgesArgs<ExtArgs>
    itinerarySteps?: boolean | Tour$itineraryStepsArgs<ExtArgs>
    includes?: boolean | Tour$includesArgs<ExtArgs>
    excludes?: boolean | Tour$excludesArgs<ExtArgs>
    faqs?: boolean | Tour$faqsArgs<ExtArgs>
    galleryImages?: boolean | Tour$galleryImagesArgs<ExtArgs>
    _count?: boolean | TourCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tour"]>

  export type TourSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    category?: boolean
    durationDays?: boolean
    priceFrom?: boolean
    currency?: boolean
    heroImage?: boolean
    shortBlurb?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    isPublished?: boolean
    isLandingFeatured?: boolean
    landingFeaturedOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tour"]>

  export type TourSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    category?: boolean
    durationDays?: boolean
    priceFrom?: boolean
    currency?: boolean
    heroImage?: boolean
    shortBlurb?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    isPublished?: boolean
    isLandingFeatured?: boolean
    landingFeaturedOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tour"]>

  export type TourSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    category?: boolean
    durationDays?: boolean
    priceFrom?: boolean
    currency?: boolean
    heroImage?: boolean
    shortBlurb?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    isPublished?: boolean
    isLandingFeatured?: boolean
    landingFeaturedOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TourOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "category" | "durationDays" | "priceFrom" | "currency" | "heroImage" | "shortBlurb" | "seoTitle" | "seoDescription" | "isPublished" | "isLandingFeatured" | "landingFeaturedOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["tour"]>
  export type TourInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badges?: boolean | Tour$badgesArgs<ExtArgs>
    itinerarySteps?: boolean | Tour$itineraryStepsArgs<ExtArgs>
    includes?: boolean | Tour$includesArgs<ExtArgs>
    excludes?: boolean | Tour$excludesArgs<ExtArgs>
    faqs?: boolean | Tour$faqsArgs<ExtArgs>
    galleryImages?: boolean | Tour$galleryImagesArgs<ExtArgs>
    _count?: boolean | TourCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TourIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TourIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TourPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tour"
    objects: {
      badges: Prisma.$TourBadgePayload<ExtArgs>[]
      itinerarySteps: Prisma.$TourItineraryStepPayload<ExtArgs>[]
      includes: Prisma.$TourIncludePayload<ExtArgs>[]
      excludes: Prisma.$TourExcludePayload<ExtArgs>[]
      faqs: Prisma.$TourFaqPayload<ExtArgs>[]
      galleryImages: Prisma.$TourGalleryImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      category: $Enums.TourCategory
      durationDays: number
      priceFrom: number
      currency: $Enums.TourCurrency
      heroImage: string
      shortBlurb: string
      seoTitle: string
      seoDescription: string
      isPublished: boolean
      isLandingFeatured: boolean
      landingFeaturedOrder: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tour"]>
    composites: {}
  }

  type TourGetPayload<S extends boolean | null | undefined | TourDefaultArgs> = $Result.GetResult<Prisma.$TourPayload, S>

  type TourCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourCountAggregateInputType | true
    }

  export interface TourDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tour'], meta: { name: 'Tour' } }
    /**
     * Find zero or one Tour that matches the filter.
     * @param {TourFindUniqueArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourFindUniqueArgs>(args: SelectSubset<T, TourFindUniqueArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tour that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourFindUniqueOrThrowArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourFindUniqueOrThrowArgs>(args: SelectSubset<T, TourFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tour that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindFirstArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourFindFirstArgs>(args?: SelectSubset<T, TourFindFirstArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tour that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindFirstOrThrowArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourFindFirstOrThrowArgs>(args?: SelectSubset<T, TourFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tours
     * const tours = await prisma.tour.findMany()
     * 
     * // Get first 10 Tours
     * const tours = await prisma.tour.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourWithIdOnly = await prisma.tour.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourFindManyArgs>(args?: SelectSubset<T, TourFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tour.
     * @param {TourCreateArgs} args - Arguments to create a Tour.
     * @example
     * // Create one Tour
     * const Tour = await prisma.tour.create({
     *   data: {
     *     // ... data to create a Tour
     *   }
     * })
     * 
     */
    create<T extends TourCreateArgs>(args: SelectSubset<T, TourCreateArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tours.
     * @param {TourCreateManyArgs} args - Arguments to create many Tours.
     * @example
     * // Create many Tours
     * const tour = await prisma.tour.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourCreateManyArgs>(args?: SelectSubset<T, TourCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tours and returns the data saved in the database.
     * @param {TourCreateManyAndReturnArgs} args - Arguments to create many Tours.
     * @example
     * // Create many Tours
     * const tour = await prisma.tour.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tours and only return the `id`
     * const tourWithIdOnly = await prisma.tour.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourCreateManyAndReturnArgs>(args?: SelectSubset<T, TourCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tour.
     * @param {TourDeleteArgs} args - Arguments to delete one Tour.
     * @example
     * // Delete one Tour
     * const Tour = await prisma.tour.delete({
     *   where: {
     *     // ... filter to delete one Tour
     *   }
     * })
     * 
     */
    delete<T extends TourDeleteArgs>(args: SelectSubset<T, TourDeleteArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tour.
     * @param {TourUpdateArgs} args - Arguments to update one Tour.
     * @example
     * // Update one Tour
     * const tour = await prisma.tour.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourUpdateArgs>(args: SelectSubset<T, TourUpdateArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tours.
     * @param {TourDeleteManyArgs} args - Arguments to filter Tours to delete.
     * @example
     * // Delete a few Tours
     * const { count } = await prisma.tour.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourDeleteManyArgs>(args?: SelectSubset<T, TourDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tours
     * const tour = await prisma.tour.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourUpdateManyArgs>(args: SelectSubset<T, TourUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tours and returns the data updated in the database.
     * @param {TourUpdateManyAndReturnArgs} args - Arguments to update many Tours.
     * @example
     * // Update many Tours
     * const tour = await prisma.tour.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tours and only return the `id`
     * const tourWithIdOnly = await prisma.tour.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TourUpdateManyAndReturnArgs>(args: SelectSubset<T, TourUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tour.
     * @param {TourUpsertArgs} args - Arguments to update or create a Tour.
     * @example
     * // Update or create a Tour
     * const tour = await prisma.tour.upsert({
     *   create: {
     *     // ... data to create a Tour
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tour we want to update
     *   }
     * })
     */
    upsert<T extends TourUpsertArgs>(args: SelectSubset<T, TourUpsertArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourCountArgs} args - Arguments to filter Tours to count.
     * @example
     * // Count the number of Tours
     * const count = await prisma.tour.count({
     *   where: {
     *     // ... the filter for the Tours we want to count
     *   }
     * })
    **/
    count<T extends TourCountArgs>(
      args?: Subset<T, TourCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TourAggregateArgs>(args: Subset<T, TourAggregateArgs>): Prisma.PrismaPromise<GetTourAggregateType<T>>

    /**
     * Group by Tour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TourGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourGroupByArgs['orderBy'] }
        : { orderBy?: TourGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tour model
   */
  readonly fields: TourFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tour.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    badges<T extends Tour$badgesArgs<ExtArgs> = {}>(args?: Subset<T, Tour$badgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itinerarySteps<T extends Tour$itineraryStepsArgs<ExtArgs> = {}>(args?: Subset<T, Tour$itineraryStepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourItineraryStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    includes<T extends Tour$includesArgs<ExtArgs> = {}>(args?: Subset<T, Tour$includesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourIncludePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    excludes<T extends Tour$excludesArgs<ExtArgs> = {}>(args?: Subset<T, Tour$excludesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourExcludePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    faqs<T extends Tour$faqsArgs<ExtArgs> = {}>(args?: Subset<T, Tour$faqsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourFaqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    galleryImages<T extends Tour$galleryImagesArgs<ExtArgs> = {}>(args?: Subset<T, Tour$galleryImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourGalleryImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tour model
   */
  interface TourFieldRefs {
    readonly id: FieldRef<"Tour", 'String'>
    readonly slug: FieldRef<"Tour", 'String'>
    readonly title: FieldRef<"Tour", 'String'>
    readonly category: FieldRef<"Tour", 'TourCategory'>
    readonly durationDays: FieldRef<"Tour", 'Int'>
    readonly priceFrom: FieldRef<"Tour", 'Int'>
    readonly currency: FieldRef<"Tour", 'TourCurrency'>
    readonly heroImage: FieldRef<"Tour", 'String'>
    readonly shortBlurb: FieldRef<"Tour", 'String'>
    readonly seoTitle: FieldRef<"Tour", 'String'>
    readonly seoDescription: FieldRef<"Tour", 'String'>
    readonly isPublished: FieldRef<"Tour", 'Boolean'>
    readonly isLandingFeatured: FieldRef<"Tour", 'Boolean'>
    readonly landingFeaturedOrder: FieldRef<"Tour", 'Int'>
    readonly createdAt: FieldRef<"Tour", 'DateTime'>
    readonly updatedAt: FieldRef<"Tour", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tour findUnique
   */
  export type TourFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour findUniqueOrThrow
   */
  export type TourFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour findFirst
   */
  export type TourFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tours.
     */
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour findFirstOrThrow
   */
  export type TourFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tours.
     */
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour findMany
   */
  export type TourFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tours to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour create
   */
  export type TourCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The data needed to create a Tour.
     */
    data: XOR<TourCreateInput, TourUncheckedCreateInput>
  }

  /**
   * Tour createMany
   */
  export type TourCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tours.
     */
    data: TourCreateManyInput | TourCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tour createManyAndReturn
   */
  export type TourCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * The data used to create many Tours.
     */
    data: TourCreateManyInput | TourCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tour update
   */
  export type TourUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The data needed to update a Tour.
     */
    data: XOR<TourUpdateInput, TourUncheckedUpdateInput>
    /**
     * Choose, which Tour to update.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour updateMany
   */
  export type TourUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tours.
     */
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyInput>
    /**
     * Filter which Tours to update
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to update.
     */
    limit?: number
  }

  /**
   * Tour updateManyAndReturn
   */
  export type TourUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * The data used to update Tours.
     */
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyInput>
    /**
     * Filter which Tours to update
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to update.
     */
    limit?: number
  }

  /**
   * Tour upsert
   */
  export type TourUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The filter to search for the Tour to update in case it exists.
     */
    where: TourWhereUniqueInput
    /**
     * In case the Tour found by the `where` argument doesn't exist, create a new Tour with this data.
     */
    create: XOR<TourCreateInput, TourUncheckedCreateInput>
    /**
     * In case the Tour was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourUpdateInput, TourUncheckedUpdateInput>
  }

  /**
   * Tour delete
   */
  export type TourDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter which Tour to delete.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour deleteMany
   */
  export type TourDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tours to delete
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to delete.
     */
    limit?: number
  }

  /**
   * Tour.badges
   */
  export type Tour$badgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourBadge
     */
    select?: TourBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourBadge
     */
    omit?: TourBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourBadgeInclude<ExtArgs> | null
    where?: TourBadgeWhereInput
    orderBy?: TourBadgeOrderByWithRelationInput | TourBadgeOrderByWithRelationInput[]
    cursor?: TourBadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourBadgeScalarFieldEnum | TourBadgeScalarFieldEnum[]
  }

  /**
   * Tour.itinerarySteps
   */
  export type Tour$itineraryStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourItineraryStep
     */
    select?: TourItineraryStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourItineraryStep
     */
    omit?: TourItineraryStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourItineraryStepInclude<ExtArgs> | null
    where?: TourItineraryStepWhereInput
    orderBy?: TourItineraryStepOrderByWithRelationInput | TourItineraryStepOrderByWithRelationInput[]
    cursor?: TourItineraryStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourItineraryStepScalarFieldEnum | TourItineraryStepScalarFieldEnum[]
  }

  /**
   * Tour.includes
   */
  export type Tour$includesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInclude
     */
    select?: TourIncludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInclude
     */
    omit?: TourIncludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeInclude<ExtArgs> | null
    where?: TourIncludeWhereInput
    orderBy?: TourIncludeOrderByWithRelationInput | TourIncludeOrderByWithRelationInput[]
    cursor?: TourIncludeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourIncludeScalarFieldEnum | TourIncludeScalarFieldEnum[]
  }

  /**
   * Tour.excludes
   */
  export type Tour$excludesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourExclude
     */
    select?: TourExcludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourExclude
     */
    omit?: TourExcludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourExcludeInclude<ExtArgs> | null
    where?: TourExcludeWhereInput
    orderBy?: TourExcludeOrderByWithRelationInput | TourExcludeOrderByWithRelationInput[]
    cursor?: TourExcludeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourExcludeScalarFieldEnum | TourExcludeScalarFieldEnum[]
  }

  /**
   * Tour.faqs
   */
  export type Tour$faqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourFaq
     */
    select?: TourFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourFaq
     */
    omit?: TourFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourFaqInclude<ExtArgs> | null
    where?: TourFaqWhereInput
    orderBy?: TourFaqOrderByWithRelationInput | TourFaqOrderByWithRelationInput[]
    cursor?: TourFaqWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourFaqScalarFieldEnum | TourFaqScalarFieldEnum[]
  }

  /**
   * Tour.galleryImages
   */
  export type Tour$galleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourGalleryImage
     */
    select?: TourGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourGalleryImage
     */
    omit?: TourGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourGalleryImageInclude<ExtArgs> | null
    where?: TourGalleryImageWhereInput
    orderBy?: TourGalleryImageOrderByWithRelationInput | TourGalleryImageOrderByWithRelationInput[]
    cursor?: TourGalleryImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourGalleryImageScalarFieldEnum | TourGalleryImageScalarFieldEnum[]
  }

  /**
   * Tour without action
   */
  export type TourDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
  }


  /**
   * Model TourBadge
   */

  export type AggregateTourBadge = {
    _count: TourBadgeCountAggregateOutputType | null
    _avg: TourBadgeAvgAggregateOutputType | null
    _sum: TourBadgeSumAggregateOutputType | null
    _min: TourBadgeMinAggregateOutputType | null
    _max: TourBadgeMaxAggregateOutputType | null
  }

  export type TourBadgeAvgAggregateOutputType = {
    order: number | null
  }

  export type TourBadgeSumAggregateOutputType = {
    order: number | null
  }

  export type TourBadgeMinAggregateOutputType = {
    id: string | null
    tourId: string | null
    label: string | null
    order: number | null
  }

  export type TourBadgeMaxAggregateOutputType = {
    id: string | null
    tourId: string | null
    label: string | null
    order: number | null
  }

  export type TourBadgeCountAggregateOutputType = {
    id: number
    tourId: number
    label: number
    order: number
    _all: number
  }


  export type TourBadgeAvgAggregateInputType = {
    order?: true
  }

  export type TourBadgeSumAggregateInputType = {
    order?: true
  }

  export type TourBadgeMinAggregateInputType = {
    id?: true
    tourId?: true
    label?: true
    order?: true
  }

  export type TourBadgeMaxAggregateInputType = {
    id?: true
    tourId?: true
    label?: true
    order?: true
  }

  export type TourBadgeCountAggregateInputType = {
    id?: true
    tourId?: true
    label?: true
    order?: true
    _all?: true
  }

  export type TourBadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourBadge to aggregate.
     */
    where?: TourBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourBadges to fetch.
     */
    orderBy?: TourBadgeOrderByWithRelationInput | TourBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourBadges
    **/
    _count?: true | TourBadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourBadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourBadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourBadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourBadgeMaxAggregateInputType
  }

  export type GetTourBadgeAggregateType<T extends TourBadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateTourBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourBadge[P]>
      : GetScalarType<T[P], AggregateTourBadge[P]>
  }




  export type TourBadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourBadgeWhereInput
    orderBy?: TourBadgeOrderByWithAggregationInput | TourBadgeOrderByWithAggregationInput[]
    by: TourBadgeScalarFieldEnum[] | TourBadgeScalarFieldEnum
    having?: TourBadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourBadgeCountAggregateInputType | true
    _avg?: TourBadgeAvgAggregateInputType
    _sum?: TourBadgeSumAggregateInputType
    _min?: TourBadgeMinAggregateInputType
    _max?: TourBadgeMaxAggregateInputType
  }

  export type TourBadgeGroupByOutputType = {
    id: string
    tourId: string
    label: string
    order: number
    _count: TourBadgeCountAggregateOutputType | null
    _avg: TourBadgeAvgAggregateOutputType | null
    _sum: TourBadgeSumAggregateOutputType | null
    _min: TourBadgeMinAggregateOutputType | null
    _max: TourBadgeMaxAggregateOutputType | null
  }

  type GetTourBadgeGroupByPayload<T extends TourBadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourBadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourBadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourBadgeGroupByOutputType[P]>
            : GetScalarType<T[P], TourBadgeGroupByOutputType[P]>
        }
      >
    >


  export type TourBadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    label?: boolean
    order?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourBadge"]>

  export type TourBadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    label?: boolean
    order?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourBadge"]>

  export type TourBadgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    label?: boolean
    order?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourBadge"]>

  export type TourBadgeSelectScalar = {
    id?: boolean
    tourId?: boolean
    label?: boolean
    order?: boolean
  }

  export type TourBadgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tourId" | "label" | "order", ExtArgs["result"]["tourBadge"]>
  export type TourBadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TourBadgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TourBadgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $TourBadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourBadge"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tourId: string
      label: string
      order: number
    }, ExtArgs["result"]["tourBadge"]>
    composites: {}
  }

  type TourBadgeGetPayload<S extends boolean | null | undefined | TourBadgeDefaultArgs> = $Result.GetResult<Prisma.$TourBadgePayload, S>

  type TourBadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourBadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourBadgeCountAggregateInputType | true
    }

  export interface TourBadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourBadge'], meta: { name: 'TourBadge' } }
    /**
     * Find zero or one TourBadge that matches the filter.
     * @param {TourBadgeFindUniqueArgs} args - Arguments to find a TourBadge
     * @example
     * // Get one TourBadge
     * const tourBadge = await prisma.tourBadge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourBadgeFindUniqueArgs>(args: SelectSubset<T, TourBadgeFindUniqueArgs<ExtArgs>>): Prisma__TourBadgeClient<$Result.GetResult<Prisma.$TourBadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourBadge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourBadgeFindUniqueOrThrowArgs} args - Arguments to find a TourBadge
     * @example
     * // Get one TourBadge
     * const tourBadge = await prisma.tourBadge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourBadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, TourBadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourBadgeClient<$Result.GetResult<Prisma.$TourBadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourBadge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourBadgeFindFirstArgs} args - Arguments to find a TourBadge
     * @example
     * // Get one TourBadge
     * const tourBadge = await prisma.tourBadge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourBadgeFindFirstArgs>(args?: SelectSubset<T, TourBadgeFindFirstArgs<ExtArgs>>): Prisma__TourBadgeClient<$Result.GetResult<Prisma.$TourBadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourBadge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourBadgeFindFirstOrThrowArgs} args - Arguments to find a TourBadge
     * @example
     * // Get one TourBadge
     * const tourBadge = await prisma.tourBadge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourBadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, TourBadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourBadgeClient<$Result.GetResult<Prisma.$TourBadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourBadges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourBadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourBadges
     * const tourBadges = await prisma.tourBadge.findMany()
     * 
     * // Get first 10 TourBadges
     * const tourBadges = await prisma.tourBadge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourBadgeWithIdOnly = await prisma.tourBadge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourBadgeFindManyArgs>(args?: SelectSubset<T, TourBadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourBadge.
     * @param {TourBadgeCreateArgs} args - Arguments to create a TourBadge.
     * @example
     * // Create one TourBadge
     * const TourBadge = await prisma.tourBadge.create({
     *   data: {
     *     // ... data to create a TourBadge
     *   }
     * })
     * 
     */
    create<T extends TourBadgeCreateArgs>(args: SelectSubset<T, TourBadgeCreateArgs<ExtArgs>>): Prisma__TourBadgeClient<$Result.GetResult<Prisma.$TourBadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourBadges.
     * @param {TourBadgeCreateManyArgs} args - Arguments to create many TourBadges.
     * @example
     * // Create many TourBadges
     * const tourBadge = await prisma.tourBadge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourBadgeCreateManyArgs>(args?: SelectSubset<T, TourBadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourBadges and returns the data saved in the database.
     * @param {TourBadgeCreateManyAndReturnArgs} args - Arguments to create many TourBadges.
     * @example
     * // Create many TourBadges
     * const tourBadge = await prisma.tourBadge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourBadges and only return the `id`
     * const tourBadgeWithIdOnly = await prisma.tourBadge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourBadgeCreateManyAndReturnArgs>(args?: SelectSubset<T, TourBadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourBadgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourBadge.
     * @param {TourBadgeDeleteArgs} args - Arguments to delete one TourBadge.
     * @example
     * // Delete one TourBadge
     * const TourBadge = await prisma.tourBadge.delete({
     *   where: {
     *     // ... filter to delete one TourBadge
     *   }
     * })
     * 
     */
    delete<T extends TourBadgeDeleteArgs>(args: SelectSubset<T, TourBadgeDeleteArgs<ExtArgs>>): Prisma__TourBadgeClient<$Result.GetResult<Prisma.$TourBadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourBadge.
     * @param {TourBadgeUpdateArgs} args - Arguments to update one TourBadge.
     * @example
     * // Update one TourBadge
     * const tourBadge = await prisma.tourBadge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourBadgeUpdateArgs>(args: SelectSubset<T, TourBadgeUpdateArgs<ExtArgs>>): Prisma__TourBadgeClient<$Result.GetResult<Prisma.$TourBadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourBadges.
     * @param {TourBadgeDeleteManyArgs} args - Arguments to filter TourBadges to delete.
     * @example
     * // Delete a few TourBadges
     * const { count } = await prisma.tourBadge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourBadgeDeleteManyArgs>(args?: SelectSubset<T, TourBadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourBadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourBadges
     * const tourBadge = await prisma.tourBadge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourBadgeUpdateManyArgs>(args: SelectSubset<T, TourBadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourBadges and returns the data updated in the database.
     * @param {TourBadgeUpdateManyAndReturnArgs} args - Arguments to update many TourBadges.
     * @example
     * // Update many TourBadges
     * const tourBadge = await prisma.tourBadge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourBadges and only return the `id`
     * const tourBadgeWithIdOnly = await prisma.tourBadge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TourBadgeUpdateManyAndReturnArgs>(args: SelectSubset<T, TourBadgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourBadgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourBadge.
     * @param {TourBadgeUpsertArgs} args - Arguments to update or create a TourBadge.
     * @example
     * // Update or create a TourBadge
     * const tourBadge = await prisma.tourBadge.upsert({
     *   create: {
     *     // ... data to create a TourBadge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourBadge we want to update
     *   }
     * })
     */
    upsert<T extends TourBadgeUpsertArgs>(args: SelectSubset<T, TourBadgeUpsertArgs<ExtArgs>>): Prisma__TourBadgeClient<$Result.GetResult<Prisma.$TourBadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourBadgeCountArgs} args - Arguments to filter TourBadges to count.
     * @example
     * // Count the number of TourBadges
     * const count = await prisma.tourBadge.count({
     *   where: {
     *     // ... the filter for the TourBadges we want to count
     *   }
     * })
    **/
    count<T extends TourBadgeCountArgs>(
      args?: Subset<T, TourBadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourBadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourBadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TourBadgeAggregateArgs>(args: Subset<T, TourBadgeAggregateArgs>): Prisma.PrismaPromise<GetTourBadgeAggregateType<T>>

    /**
     * Group by TourBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourBadgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TourBadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourBadgeGroupByArgs['orderBy'] }
        : { orderBy?: TourBadgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TourBadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourBadge model
   */
  readonly fields: TourBadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourBadge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourBadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TourBadge model
   */
  interface TourBadgeFieldRefs {
    readonly id: FieldRef<"TourBadge", 'String'>
    readonly tourId: FieldRef<"TourBadge", 'String'>
    readonly label: FieldRef<"TourBadge", 'String'>
    readonly order: FieldRef<"TourBadge", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TourBadge findUnique
   */
  export type TourBadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourBadge
     */
    select?: TourBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourBadge
     */
    omit?: TourBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourBadgeInclude<ExtArgs> | null
    /**
     * Filter, which TourBadge to fetch.
     */
    where: TourBadgeWhereUniqueInput
  }

  /**
   * TourBadge findUniqueOrThrow
   */
  export type TourBadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourBadge
     */
    select?: TourBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourBadge
     */
    omit?: TourBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourBadgeInclude<ExtArgs> | null
    /**
     * Filter, which TourBadge to fetch.
     */
    where: TourBadgeWhereUniqueInput
  }

  /**
   * TourBadge findFirst
   */
  export type TourBadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourBadge
     */
    select?: TourBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourBadge
     */
    omit?: TourBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourBadgeInclude<ExtArgs> | null
    /**
     * Filter, which TourBadge to fetch.
     */
    where?: TourBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourBadges to fetch.
     */
    orderBy?: TourBadgeOrderByWithRelationInput | TourBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourBadges.
     */
    cursor?: TourBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourBadges.
     */
    distinct?: TourBadgeScalarFieldEnum | TourBadgeScalarFieldEnum[]
  }

  /**
   * TourBadge findFirstOrThrow
   */
  export type TourBadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourBadge
     */
    select?: TourBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourBadge
     */
    omit?: TourBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourBadgeInclude<ExtArgs> | null
    /**
     * Filter, which TourBadge to fetch.
     */
    where?: TourBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourBadges to fetch.
     */
    orderBy?: TourBadgeOrderByWithRelationInput | TourBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourBadges.
     */
    cursor?: TourBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourBadges.
     */
    distinct?: TourBadgeScalarFieldEnum | TourBadgeScalarFieldEnum[]
  }

  /**
   * TourBadge findMany
   */
  export type TourBadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourBadge
     */
    select?: TourBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourBadge
     */
    omit?: TourBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourBadgeInclude<ExtArgs> | null
    /**
     * Filter, which TourBadges to fetch.
     */
    where?: TourBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourBadges to fetch.
     */
    orderBy?: TourBadgeOrderByWithRelationInput | TourBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourBadges.
     */
    cursor?: TourBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourBadges.
     */
    skip?: number
    distinct?: TourBadgeScalarFieldEnum | TourBadgeScalarFieldEnum[]
  }

  /**
   * TourBadge create
   */
  export type TourBadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourBadge
     */
    select?: TourBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourBadge
     */
    omit?: TourBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourBadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a TourBadge.
     */
    data: XOR<TourBadgeCreateInput, TourBadgeUncheckedCreateInput>
  }

  /**
   * TourBadge createMany
   */
  export type TourBadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourBadges.
     */
    data: TourBadgeCreateManyInput | TourBadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourBadge createManyAndReturn
   */
  export type TourBadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourBadge
     */
    select?: TourBadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourBadge
     */
    omit?: TourBadgeOmit<ExtArgs> | null
    /**
     * The data used to create many TourBadges.
     */
    data: TourBadgeCreateManyInput | TourBadgeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourBadgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourBadge update
   */
  export type TourBadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourBadge
     */
    select?: TourBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourBadge
     */
    omit?: TourBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourBadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a TourBadge.
     */
    data: XOR<TourBadgeUpdateInput, TourBadgeUncheckedUpdateInput>
    /**
     * Choose, which TourBadge to update.
     */
    where: TourBadgeWhereUniqueInput
  }

  /**
   * TourBadge updateMany
   */
  export type TourBadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourBadges.
     */
    data: XOR<TourBadgeUpdateManyMutationInput, TourBadgeUncheckedUpdateManyInput>
    /**
     * Filter which TourBadges to update
     */
    where?: TourBadgeWhereInput
    /**
     * Limit how many TourBadges to update.
     */
    limit?: number
  }

  /**
   * TourBadge updateManyAndReturn
   */
  export type TourBadgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourBadge
     */
    select?: TourBadgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourBadge
     */
    omit?: TourBadgeOmit<ExtArgs> | null
    /**
     * The data used to update TourBadges.
     */
    data: XOR<TourBadgeUpdateManyMutationInput, TourBadgeUncheckedUpdateManyInput>
    /**
     * Filter which TourBadges to update
     */
    where?: TourBadgeWhereInput
    /**
     * Limit how many TourBadges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourBadgeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourBadge upsert
   */
  export type TourBadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourBadge
     */
    select?: TourBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourBadge
     */
    omit?: TourBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourBadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the TourBadge to update in case it exists.
     */
    where: TourBadgeWhereUniqueInput
    /**
     * In case the TourBadge found by the `where` argument doesn't exist, create a new TourBadge with this data.
     */
    create: XOR<TourBadgeCreateInput, TourBadgeUncheckedCreateInput>
    /**
     * In case the TourBadge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourBadgeUpdateInput, TourBadgeUncheckedUpdateInput>
  }

  /**
   * TourBadge delete
   */
  export type TourBadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourBadge
     */
    select?: TourBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourBadge
     */
    omit?: TourBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourBadgeInclude<ExtArgs> | null
    /**
     * Filter which TourBadge to delete.
     */
    where: TourBadgeWhereUniqueInput
  }

  /**
   * TourBadge deleteMany
   */
  export type TourBadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourBadges to delete
     */
    where?: TourBadgeWhereInput
    /**
     * Limit how many TourBadges to delete.
     */
    limit?: number
  }

  /**
   * TourBadge without action
   */
  export type TourBadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourBadge
     */
    select?: TourBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourBadge
     */
    omit?: TourBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourBadgeInclude<ExtArgs> | null
  }


  /**
   * Model TourItineraryStep
   */

  export type AggregateTourItineraryStep = {
    _count: TourItineraryStepCountAggregateOutputType | null
    _avg: TourItineraryStepAvgAggregateOutputType | null
    _sum: TourItineraryStepSumAggregateOutputType | null
    _min: TourItineraryStepMinAggregateOutputType | null
    _max: TourItineraryStepMaxAggregateOutputType | null
  }

  export type TourItineraryStepAvgAggregateOutputType = {
    order: number | null
  }

  export type TourItineraryStepSumAggregateOutputType = {
    order: number | null
  }

  export type TourItineraryStepMinAggregateOutputType = {
    id: string | null
    tourId: string | null
    day: string | null
    title: string | null
    description: string | null
    order: number | null
  }

  export type TourItineraryStepMaxAggregateOutputType = {
    id: string | null
    tourId: string | null
    day: string | null
    title: string | null
    description: string | null
    order: number | null
  }

  export type TourItineraryStepCountAggregateOutputType = {
    id: number
    tourId: number
    day: number
    title: number
    description: number
    order: number
    _all: number
  }


  export type TourItineraryStepAvgAggregateInputType = {
    order?: true
  }

  export type TourItineraryStepSumAggregateInputType = {
    order?: true
  }

  export type TourItineraryStepMinAggregateInputType = {
    id?: true
    tourId?: true
    day?: true
    title?: true
    description?: true
    order?: true
  }

  export type TourItineraryStepMaxAggregateInputType = {
    id?: true
    tourId?: true
    day?: true
    title?: true
    description?: true
    order?: true
  }

  export type TourItineraryStepCountAggregateInputType = {
    id?: true
    tourId?: true
    day?: true
    title?: true
    description?: true
    order?: true
    _all?: true
  }

  export type TourItineraryStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourItineraryStep to aggregate.
     */
    where?: TourItineraryStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourItinerarySteps to fetch.
     */
    orderBy?: TourItineraryStepOrderByWithRelationInput | TourItineraryStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourItineraryStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourItinerarySteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourItinerarySteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourItinerarySteps
    **/
    _count?: true | TourItineraryStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourItineraryStepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourItineraryStepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourItineraryStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourItineraryStepMaxAggregateInputType
  }

  export type GetTourItineraryStepAggregateType<T extends TourItineraryStepAggregateArgs> = {
        [P in keyof T & keyof AggregateTourItineraryStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourItineraryStep[P]>
      : GetScalarType<T[P], AggregateTourItineraryStep[P]>
  }




  export type TourItineraryStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourItineraryStepWhereInput
    orderBy?: TourItineraryStepOrderByWithAggregationInput | TourItineraryStepOrderByWithAggregationInput[]
    by: TourItineraryStepScalarFieldEnum[] | TourItineraryStepScalarFieldEnum
    having?: TourItineraryStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourItineraryStepCountAggregateInputType | true
    _avg?: TourItineraryStepAvgAggregateInputType
    _sum?: TourItineraryStepSumAggregateInputType
    _min?: TourItineraryStepMinAggregateInputType
    _max?: TourItineraryStepMaxAggregateInputType
  }

  export type TourItineraryStepGroupByOutputType = {
    id: string
    tourId: string
    day: string
    title: string
    description: string
    order: number
    _count: TourItineraryStepCountAggregateOutputType | null
    _avg: TourItineraryStepAvgAggregateOutputType | null
    _sum: TourItineraryStepSumAggregateOutputType | null
    _min: TourItineraryStepMinAggregateOutputType | null
    _max: TourItineraryStepMaxAggregateOutputType | null
  }

  type GetTourItineraryStepGroupByPayload<T extends TourItineraryStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourItineraryStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourItineraryStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourItineraryStepGroupByOutputType[P]>
            : GetScalarType<T[P], TourItineraryStepGroupByOutputType[P]>
        }
      >
    >


  export type TourItineraryStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    day?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourItineraryStep"]>

  export type TourItineraryStepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    day?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourItineraryStep"]>

  export type TourItineraryStepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    day?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourItineraryStep"]>

  export type TourItineraryStepSelectScalar = {
    id?: boolean
    tourId?: boolean
    day?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
  }

  export type TourItineraryStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tourId" | "day" | "title" | "description" | "order", ExtArgs["result"]["tourItineraryStep"]>
  export type TourItineraryStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TourItineraryStepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TourItineraryStepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $TourItineraryStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourItineraryStep"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tourId: string
      day: string
      title: string
      description: string
      order: number
    }, ExtArgs["result"]["tourItineraryStep"]>
    composites: {}
  }

  type TourItineraryStepGetPayload<S extends boolean | null | undefined | TourItineraryStepDefaultArgs> = $Result.GetResult<Prisma.$TourItineraryStepPayload, S>

  type TourItineraryStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourItineraryStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourItineraryStepCountAggregateInputType | true
    }

  export interface TourItineraryStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourItineraryStep'], meta: { name: 'TourItineraryStep' } }
    /**
     * Find zero or one TourItineraryStep that matches the filter.
     * @param {TourItineraryStepFindUniqueArgs} args - Arguments to find a TourItineraryStep
     * @example
     * // Get one TourItineraryStep
     * const tourItineraryStep = await prisma.tourItineraryStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourItineraryStepFindUniqueArgs>(args: SelectSubset<T, TourItineraryStepFindUniqueArgs<ExtArgs>>): Prisma__TourItineraryStepClient<$Result.GetResult<Prisma.$TourItineraryStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourItineraryStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourItineraryStepFindUniqueOrThrowArgs} args - Arguments to find a TourItineraryStep
     * @example
     * // Get one TourItineraryStep
     * const tourItineraryStep = await prisma.tourItineraryStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourItineraryStepFindUniqueOrThrowArgs>(args: SelectSubset<T, TourItineraryStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourItineraryStepClient<$Result.GetResult<Prisma.$TourItineraryStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourItineraryStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourItineraryStepFindFirstArgs} args - Arguments to find a TourItineraryStep
     * @example
     * // Get one TourItineraryStep
     * const tourItineraryStep = await prisma.tourItineraryStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourItineraryStepFindFirstArgs>(args?: SelectSubset<T, TourItineraryStepFindFirstArgs<ExtArgs>>): Prisma__TourItineraryStepClient<$Result.GetResult<Prisma.$TourItineraryStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourItineraryStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourItineraryStepFindFirstOrThrowArgs} args - Arguments to find a TourItineraryStep
     * @example
     * // Get one TourItineraryStep
     * const tourItineraryStep = await prisma.tourItineraryStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourItineraryStepFindFirstOrThrowArgs>(args?: SelectSubset<T, TourItineraryStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourItineraryStepClient<$Result.GetResult<Prisma.$TourItineraryStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourItinerarySteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourItineraryStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourItinerarySteps
     * const tourItinerarySteps = await prisma.tourItineraryStep.findMany()
     * 
     * // Get first 10 TourItinerarySteps
     * const tourItinerarySteps = await prisma.tourItineraryStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourItineraryStepWithIdOnly = await prisma.tourItineraryStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourItineraryStepFindManyArgs>(args?: SelectSubset<T, TourItineraryStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourItineraryStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourItineraryStep.
     * @param {TourItineraryStepCreateArgs} args - Arguments to create a TourItineraryStep.
     * @example
     * // Create one TourItineraryStep
     * const TourItineraryStep = await prisma.tourItineraryStep.create({
     *   data: {
     *     // ... data to create a TourItineraryStep
     *   }
     * })
     * 
     */
    create<T extends TourItineraryStepCreateArgs>(args: SelectSubset<T, TourItineraryStepCreateArgs<ExtArgs>>): Prisma__TourItineraryStepClient<$Result.GetResult<Prisma.$TourItineraryStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourItinerarySteps.
     * @param {TourItineraryStepCreateManyArgs} args - Arguments to create many TourItinerarySteps.
     * @example
     * // Create many TourItinerarySteps
     * const tourItineraryStep = await prisma.tourItineraryStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourItineraryStepCreateManyArgs>(args?: SelectSubset<T, TourItineraryStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourItinerarySteps and returns the data saved in the database.
     * @param {TourItineraryStepCreateManyAndReturnArgs} args - Arguments to create many TourItinerarySteps.
     * @example
     * // Create many TourItinerarySteps
     * const tourItineraryStep = await prisma.tourItineraryStep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourItinerarySteps and only return the `id`
     * const tourItineraryStepWithIdOnly = await prisma.tourItineraryStep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourItineraryStepCreateManyAndReturnArgs>(args?: SelectSubset<T, TourItineraryStepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourItineraryStepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourItineraryStep.
     * @param {TourItineraryStepDeleteArgs} args - Arguments to delete one TourItineraryStep.
     * @example
     * // Delete one TourItineraryStep
     * const TourItineraryStep = await prisma.tourItineraryStep.delete({
     *   where: {
     *     // ... filter to delete one TourItineraryStep
     *   }
     * })
     * 
     */
    delete<T extends TourItineraryStepDeleteArgs>(args: SelectSubset<T, TourItineraryStepDeleteArgs<ExtArgs>>): Prisma__TourItineraryStepClient<$Result.GetResult<Prisma.$TourItineraryStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourItineraryStep.
     * @param {TourItineraryStepUpdateArgs} args - Arguments to update one TourItineraryStep.
     * @example
     * // Update one TourItineraryStep
     * const tourItineraryStep = await prisma.tourItineraryStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourItineraryStepUpdateArgs>(args: SelectSubset<T, TourItineraryStepUpdateArgs<ExtArgs>>): Prisma__TourItineraryStepClient<$Result.GetResult<Prisma.$TourItineraryStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourItinerarySteps.
     * @param {TourItineraryStepDeleteManyArgs} args - Arguments to filter TourItinerarySteps to delete.
     * @example
     * // Delete a few TourItinerarySteps
     * const { count } = await prisma.tourItineraryStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourItineraryStepDeleteManyArgs>(args?: SelectSubset<T, TourItineraryStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourItinerarySteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourItineraryStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourItinerarySteps
     * const tourItineraryStep = await prisma.tourItineraryStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourItineraryStepUpdateManyArgs>(args: SelectSubset<T, TourItineraryStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourItinerarySteps and returns the data updated in the database.
     * @param {TourItineraryStepUpdateManyAndReturnArgs} args - Arguments to update many TourItinerarySteps.
     * @example
     * // Update many TourItinerarySteps
     * const tourItineraryStep = await prisma.tourItineraryStep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourItinerarySteps and only return the `id`
     * const tourItineraryStepWithIdOnly = await prisma.tourItineraryStep.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TourItineraryStepUpdateManyAndReturnArgs>(args: SelectSubset<T, TourItineraryStepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourItineraryStepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourItineraryStep.
     * @param {TourItineraryStepUpsertArgs} args - Arguments to update or create a TourItineraryStep.
     * @example
     * // Update or create a TourItineraryStep
     * const tourItineraryStep = await prisma.tourItineraryStep.upsert({
     *   create: {
     *     // ... data to create a TourItineraryStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourItineraryStep we want to update
     *   }
     * })
     */
    upsert<T extends TourItineraryStepUpsertArgs>(args: SelectSubset<T, TourItineraryStepUpsertArgs<ExtArgs>>): Prisma__TourItineraryStepClient<$Result.GetResult<Prisma.$TourItineraryStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourItinerarySteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourItineraryStepCountArgs} args - Arguments to filter TourItinerarySteps to count.
     * @example
     * // Count the number of TourItinerarySteps
     * const count = await prisma.tourItineraryStep.count({
     *   where: {
     *     // ... the filter for the TourItinerarySteps we want to count
     *   }
     * })
    **/
    count<T extends TourItineraryStepCountArgs>(
      args?: Subset<T, TourItineraryStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourItineraryStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourItineraryStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourItineraryStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TourItineraryStepAggregateArgs>(args: Subset<T, TourItineraryStepAggregateArgs>): Prisma.PrismaPromise<GetTourItineraryStepAggregateType<T>>

    /**
     * Group by TourItineraryStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourItineraryStepGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TourItineraryStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourItineraryStepGroupByArgs['orderBy'] }
        : { orderBy?: TourItineraryStepGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TourItineraryStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourItineraryStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourItineraryStep model
   */
  readonly fields: TourItineraryStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourItineraryStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourItineraryStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TourItineraryStep model
   */
  interface TourItineraryStepFieldRefs {
    readonly id: FieldRef<"TourItineraryStep", 'String'>
    readonly tourId: FieldRef<"TourItineraryStep", 'String'>
    readonly day: FieldRef<"TourItineraryStep", 'String'>
    readonly title: FieldRef<"TourItineraryStep", 'String'>
    readonly description: FieldRef<"TourItineraryStep", 'String'>
    readonly order: FieldRef<"TourItineraryStep", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TourItineraryStep findUnique
   */
  export type TourItineraryStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourItineraryStep
     */
    select?: TourItineraryStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourItineraryStep
     */
    omit?: TourItineraryStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourItineraryStepInclude<ExtArgs> | null
    /**
     * Filter, which TourItineraryStep to fetch.
     */
    where: TourItineraryStepWhereUniqueInput
  }

  /**
   * TourItineraryStep findUniqueOrThrow
   */
  export type TourItineraryStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourItineraryStep
     */
    select?: TourItineraryStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourItineraryStep
     */
    omit?: TourItineraryStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourItineraryStepInclude<ExtArgs> | null
    /**
     * Filter, which TourItineraryStep to fetch.
     */
    where: TourItineraryStepWhereUniqueInput
  }

  /**
   * TourItineraryStep findFirst
   */
  export type TourItineraryStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourItineraryStep
     */
    select?: TourItineraryStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourItineraryStep
     */
    omit?: TourItineraryStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourItineraryStepInclude<ExtArgs> | null
    /**
     * Filter, which TourItineraryStep to fetch.
     */
    where?: TourItineraryStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourItinerarySteps to fetch.
     */
    orderBy?: TourItineraryStepOrderByWithRelationInput | TourItineraryStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourItinerarySteps.
     */
    cursor?: TourItineraryStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourItinerarySteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourItinerarySteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourItinerarySteps.
     */
    distinct?: TourItineraryStepScalarFieldEnum | TourItineraryStepScalarFieldEnum[]
  }

  /**
   * TourItineraryStep findFirstOrThrow
   */
  export type TourItineraryStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourItineraryStep
     */
    select?: TourItineraryStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourItineraryStep
     */
    omit?: TourItineraryStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourItineraryStepInclude<ExtArgs> | null
    /**
     * Filter, which TourItineraryStep to fetch.
     */
    where?: TourItineraryStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourItinerarySteps to fetch.
     */
    orderBy?: TourItineraryStepOrderByWithRelationInput | TourItineraryStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourItinerarySteps.
     */
    cursor?: TourItineraryStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourItinerarySteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourItinerarySteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourItinerarySteps.
     */
    distinct?: TourItineraryStepScalarFieldEnum | TourItineraryStepScalarFieldEnum[]
  }

  /**
   * TourItineraryStep findMany
   */
  export type TourItineraryStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourItineraryStep
     */
    select?: TourItineraryStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourItineraryStep
     */
    omit?: TourItineraryStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourItineraryStepInclude<ExtArgs> | null
    /**
     * Filter, which TourItinerarySteps to fetch.
     */
    where?: TourItineraryStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourItinerarySteps to fetch.
     */
    orderBy?: TourItineraryStepOrderByWithRelationInput | TourItineraryStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourItinerarySteps.
     */
    cursor?: TourItineraryStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourItinerarySteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourItinerarySteps.
     */
    skip?: number
    distinct?: TourItineraryStepScalarFieldEnum | TourItineraryStepScalarFieldEnum[]
  }

  /**
   * TourItineraryStep create
   */
  export type TourItineraryStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourItineraryStep
     */
    select?: TourItineraryStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourItineraryStep
     */
    omit?: TourItineraryStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourItineraryStepInclude<ExtArgs> | null
    /**
     * The data needed to create a TourItineraryStep.
     */
    data: XOR<TourItineraryStepCreateInput, TourItineraryStepUncheckedCreateInput>
  }

  /**
   * TourItineraryStep createMany
   */
  export type TourItineraryStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourItinerarySteps.
     */
    data: TourItineraryStepCreateManyInput | TourItineraryStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourItineraryStep createManyAndReturn
   */
  export type TourItineraryStepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourItineraryStep
     */
    select?: TourItineraryStepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourItineraryStep
     */
    omit?: TourItineraryStepOmit<ExtArgs> | null
    /**
     * The data used to create many TourItinerarySteps.
     */
    data: TourItineraryStepCreateManyInput | TourItineraryStepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourItineraryStepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourItineraryStep update
   */
  export type TourItineraryStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourItineraryStep
     */
    select?: TourItineraryStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourItineraryStep
     */
    omit?: TourItineraryStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourItineraryStepInclude<ExtArgs> | null
    /**
     * The data needed to update a TourItineraryStep.
     */
    data: XOR<TourItineraryStepUpdateInput, TourItineraryStepUncheckedUpdateInput>
    /**
     * Choose, which TourItineraryStep to update.
     */
    where: TourItineraryStepWhereUniqueInput
  }

  /**
   * TourItineraryStep updateMany
   */
  export type TourItineraryStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourItinerarySteps.
     */
    data: XOR<TourItineraryStepUpdateManyMutationInput, TourItineraryStepUncheckedUpdateManyInput>
    /**
     * Filter which TourItinerarySteps to update
     */
    where?: TourItineraryStepWhereInput
    /**
     * Limit how many TourItinerarySteps to update.
     */
    limit?: number
  }

  /**
   * TourItineraryStep updateManyAndReturn
   */
  export type TourItineraryStepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourItineraryStep
     */
    select?: TourItineraryStepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourItineraryStep
     */
    omit?: TourItineraryStepOmit<ExtArgs> | null
    /**
     * The data used to update TourItinerarySteps.
     */
    data: XOR<TourItineraryStepUpdateManyMutationInput, TourItineraryStepUncheckedUpdateManyInput>
    /**
     * Filter which TourItinerarySteps to update
     */
    where?: TourItineraryStepWhereInput
    /**
     * Limit how many TourItinerarySteps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourItineraryStepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourItineraryStep upsert
   */
  export type TourItineraryStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourItineraryStep
     */
    select?: TourItineraryStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourItineraryStep
     */
    omit?: TourItineraryStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourItineraryStepInclude<ExtArgs> | null
    /**
     * The filter to search for the TourItineraryStep to update in case it exists.
     */
    where: TourItineraryStepWhereUniqueInput
    /**
     * In case the TourItineraryStep found by the `where` argument doesn't exist, create a new TourItineraryStep with this data.
     */
    create: XOR<TourItineraryStepCreateInput, TourItineraryStepUncheckedCreateInput>
    /**
     * In case the TourItineraryStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourItineraryStepUpdateInput, TourItineraryStepUncheckedUpdateInput>
  }

  /**
   * TourItineraryStep delete
   */
  export type TourItineraryStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourItineraryStep
     */
    select?: TourItineraryStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourItineraryStep
     */
    omit?: TourItineraryStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourItineraryStepInclude<ExtArgs> | null
    /**
     * Filter which TourItineraryStep to delete.
     */
    where: TourItineraryStepWhereUniqueInput
  }

  /**
   * TourItineraryStep deleteMany
   */
  export type TourItineraryStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourItinerarySteps to delete
     */
    where?: TourItineraryStepWhereInput
    /**
     * Limit how many TourItinerarySteps to delete.
     */
    limit?: number
  }

  /**
   * TourItineraryStep without action
   */
  export type TourItineraryStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourItineraryStep
     */
    select?: TourItineraryStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourItineraryStep
     */
    omit?: TourItineraryStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourItineraryStepInclude<ExtArgs> | null
  }


  /**
   * Model TourInclude
   */

  export type AggregateTourInclude = {
    _count: TourIncludeCountAggregateOutputType | null
    _avg: TourIncludeAvgAggregateOutputType | null
    _sum: TourIncludeSumAggregateOutputType | null
    _min: TourIncludeMinAggregateOutputType | null
    _max: TourIncludeMaxAggregateOutputType | null
  }

  export type TourIncludeAvgAggregateOutputType = {
    order: number | null
  }

  export type TourIncludeSumAggregateOutputType = {
    order: number | null
  }

  export type TourIncludeMinAggregateOutputType = {
    id: string | null
    tourId: string | null
    item: string | null
    order: number | null
  }

  export type TourIncludeMaxAggregateOutputType = {
    id: string | null
    tourId: string | null
    item: string | null
    order: number | null
  }

  export type TourIncludeCountAggregateOutputType = {
    id: number
    tourId: number
    item: number
    order: number
    _all: number
  }


  export type TourIncludeAvgAggregateInputType = {
    order?: true
  }

  export type TourIncludeSumAggregateInputType = {
    order?: true
  }

  export type TourIncludeMinAggregateInputType = {
    id?: true
    tourId?: true
    item?: true
    order?: true
  }

  export type TourIncludeMaxAggregateInputType = {
    id?: true
    tourId?: true
    item?: true
    order?: true
  }

  export type TourIncludeCountAggregateInputType = {
    id?: true
    tourId?: true
    item?: true
    order?: true
    _all?: true
  }

  export type TourIncludeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourInclude to aggregate.
     */
    where?: TourIncludeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourIncludes to fetch.
     */
    orderBy?: TourIncludeOrderByWithRelationInput | TourIncludeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourIncludeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourIncludes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourIncludes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourIncludes
    **/
    _count?: true | TourIncludeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourIncludeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourIncludeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourIncludeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourIncludeMaxAggregateInputType
  }

  export type GetTourIncludeAggregateType<T extends TourIncludeAggregateArgs> = {
        [P in keyof T & keyof AggregateTourInclude]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourInclude[P]>
      : GetScalarType<T[P], AggregateTourInclude[P]>
  }




  export type TourIncludeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourIncludeWhereInput
    orderBy?: TourIncludeOrderByWithAggregationInput | TourIncludeOrderByWithAggregationInput[]
    by: TourIncludeScalarFieldEnum[] | TourIncludeScalarFieldEnum
    having?: TourIncludeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourIncludeCountAggregateInputType | true
    _avg?: TourIncludeAvgAggregateInputType
    _sum?: TourIncludeSumAggregateInputType
    _min?: TourIncludeMinAggregateInputType
    _max?: TourIncludeMaxAggregateInputType
  }

  export type TourIncludeGroupByOutputType = {
    id: string
    tourId: string
    item: string
    order: number
    _count: TourIncludeCountAggregateOutputType | null
    _avg: TourIncludeAvgAggregateOutputType | null
    _sum: TourIncludeSumAggregateOutputType | null
    _min: TourIncludeMinAggregateOutputType | null
    _max: TourIncludeMaxAggregateOutputType | null
  }

  type GetTourIncludeGroupByPayload<T extends TourIncludeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourIncludeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourIncludeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourIncludeGroupByOutputType[P]>
            : GetScalarType<T[P], TourIncludeGroupByOutputType[P]>
        }
      >
    >


  export type TourIncludeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    item?: boolean
    order?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourInclude"]>

  export type TourIncludeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    item?: boolean
    order?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourInclude"]>

  export type TourIncludeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    item?: boolean
    order?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourInclude"]>

  export type TourIncludeSelectScalar = {
    id?: boolean
    tourId?: boolean
    item?: boolean
    order?: boolean
  }

  export type TourIncludeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tourId" | "item" | "order", ExtArgs["result"]["tourInclude"]>
  export type TourIncludeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TourIncludeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TourIncludeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $TourIncludePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourInclude"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tourId: string
      item: string
      order: number
    }, ExtArgs["result"]["tourInclude"]>
    composites: {}
  }

  type TourIncludeGetPayload<S extends boolean | null | undefined | TourIncludeDefaultArgs> = $Result.GetResult<Prisma.$TourIncludePayload, S>

  type TourIncludeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourIncludeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourIncludeCountAggregateInputType | true
    }

  export interface TourIncludeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourInclude'], meta: { name: 'TourInclude' } }
    /**
     * Find zero or one TourInclude that matches the filter.
     * @param {TourIncludeFindUniqueArgs} args - Arguments to find a TourInclude
     * @example
     * // Get one TourInclude
     * const tourInclude = await prisma.tourInclude.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourIncludeFindUniqueArgs>(args: SelectSubset<T, TourIncludeFindUniqueArgs<ExtArgs>>): Prisma__TourIncludeClient<$Result.GetResult<Prisma.$TourIncludePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourInclude that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourIncludeFindUniqueOrThrowArgs} args - Arguments to find a TourInclude
     * @example
     * // Get one TourInclude
     * const tourInclude = await prisma.tourInclude.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourIncludeFindUniqueOrThrowArgs>(args: SelectSubset<T, TourIncludeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourIncludeClient<$Result.GetResult<Prisma.$TourIncludePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourInclude that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourIncludeFindFirstArgs} args - Arguments to find a TourInclude
     * @example
     * // Get one TourInclude
     * const tourInclude = await prisma.tourInclude.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourIncludeFindFirstArgs>(args?: SelectSubset<T, TourIncludeFindFirstArgs<ExtArgs>>): Prisma__TourIncludeClient<$Result.GetResult<Prisma.$TourIncludePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourInclude that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourIncludeFindFirstOrThrowArgs} args - Arguments to find a TourInclude
     * @example
     * // Get one TourInclude
     * const tourInclude = await prisma.tourInclude.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourIncludeFindFirstOrThrowArgs>(args?: SelectSubset<T, TourIncludeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourIncludeClient<$Result.GetResult<Prisma.$TourIncludePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourIncludes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourIncludeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourIncludes
     * const tourIncludes = await prisma.tourInclude.findMany()
     * 
     * // Get first 10 TourIncludes
     * const tourIncludes = await prisma.tourInclude.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourIncludeWithIdOnly = await prisma.tourInclude.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourIncludeFindManyArgs>(args?: SelectSubset<T, TourIncludeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourIncludePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourInclude.
     * @param {TourIncludeCreateArgs} args - Arguments to create a TourInclude.
     * @example
     * // Create one TourInclude
     * const TourInclude = await prisma.tourInclude.create({
     *   data: {
     *     // ... data to create a TourInclude
     *   }
     * })
     * 
     */
    create<T extends TourIncludeCreateArgs>(args: SelectSubset<T, TourIncludeCreateArgs<ExtArgs>>): Prisma__TourIncludeClient<$Result.GetResult<Prisma.$TourIncludePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourIncludes.
     * @param {TourIncludeCreateManyArgs} args - Arguments to create many TourIncludes.
     * @example
     * // Create many TourIncludes
     * const tourInclude = await prisma.tourInclude.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourIncludeCreateManyArgs>(args?: SelectSubset<T, TourIncludeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourIncludes and returns the data saved in the database.
     * @param {TourIncludeCreateManyAndReturnArgs} args - Arguments to create many TourIncludes.
     * @example
     * // Create many TourIncludes
     * const tourInclude = await prisma.tourInclude.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourIncludes and only return the `id`
     * const tourIncludeWithIdOnly = await prisma.tourInclude.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourIncludeCreateManyAndReturnArgs>(args?: SelectSubset<T, TourIncludeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourIncludePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourInclude.
     * @param {TourIncludeDeleteArgs} args - Arguments to delete one TourInclude.
     * @example
     * // Delete one TourInclude
     * const TourInclude = await prisma.tourInclude.delete({
     *   where: {
     *     // ... filter to delete one TourInclude
     *   }
     * })
     * 
     */
    delete<T extends TourIncludeDeleteArgs>(args: SelectSubset<T, TourIncludeDeleteArgs<ExtArgs>>): Prisma__TourIncludeClient<$Result.GetResult<Prisma.$TourIncludePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourInclude.
     * @param {TourIncludeUpdateArgs} args - Arguments to update one TourInclude.
     * @example
     * // Update one TourInclude
     * const tourInclude = await prisma.tourInclude.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourIncludeUpdateArgs>(args: SelectSubset<T, TourIncludeUpdateArgs<ExtArgs>>): Prisma__TourIncludeClient<$Result.GetResult<Prisma.$TourIncludePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourIncludes.
     * @param {TourIncludeDeleteManyArgs} args - Arguments to filter TourIncludes to delete.
     * @example
     * // Delete a few TourIncludes
     * const { count } = await prisma.tourInclude.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourIncludeDeleteManyArgs>(args?: SelectSubset<T, TourIncludeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourIncludes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourIncludeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourIncludes
     * const tourInclude = await prisma.tourInclude.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourIncludeUpdateManyArgs>(args: SelectSubset<T, TourIncludeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourIncludes and returns the data updated in the database.
     * @param {TourIncludeUpdateManyAndReturnArgs} args - Arguments to update many TourIncludes.
     * @example
     * // Update many TourIncludes
     * const tourInclude = await prisma.tourInclude.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourIncludes and only return the `id`
     * const tourIncludeWithIdOnly = await prisma.tourInclude.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TourIncludeUpdateManyAndReturnArgs>(args: SelectSubset<T, TourIncludeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourIncludePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourInclude.
     * @param {TourIncludeUpsertArgs} args - Arguments to update or create a TourInclude.
     * @example
     * // Update or create a TourInclude
     * const tourInclude = await prisma.tourInclude.upsert({
     *   create: {
     *     // ... data to create a TourInclude
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourInclude we want to update
     *   }
     * })
     */
    upsert<T extends TourIncludeUpsertArgs>(args: SelectSubset<T, TourIncludeUpsertArgs<ExtArgs>>): Prisma__TourIncludeClient<$Result.GetResult<Prisma.$TourIncludePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourIncludes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourIncludeCountArgs} args - Arguments to filter TourIncludes to count.
     * @example
     * // Count the number of TourIncludes
     * const count = await prisma.tourInclude.count({
     *   where: {
     *     // ... the filter for the TourIncludes we want to count
     *   }
     * })
    **/
    count<T extends TourIncludeCountArgs>(
      args?: Subset<T, TourIncludeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourIncludeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourInclude.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourIncludeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TourIncludeAggregateArgs>(args: Subset<T, TourIncludeAggregateArgs>): Prisma.PrismaPromise<GetTourIncludeAggregateType<T>>

    /**
     * Group by TourInclude.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourIncludeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TourIncludeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourIncludeGroupByArgs['orderBy'] }
        : { orderBy?: TourIncludeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TourIncludeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourIncludeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourInclude model
   */
  readonly fields: TourIncludeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourInclude.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourIncludeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TourInclude model
   */
  interface TourIncludeFieldRefs {
    readonly id: FieldRef<"TourInclude", 'String'>
    readonly tourId: FieldRef<"TourInclude", 'String'>
    readonly item: FieldRef<"TourInclude", 'String'>
    readonly order: FieldRef<"TourInclude", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TourInclude findUnique
   */
  export type TourIncludeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInclude
     */
    select?: TourIncludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInclude
     */
    omit?: TourIncludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeInclude<ExtArgs> | null
    /**
     * Filter, which TourInclude to fetch.
     */
    where: TourIncludeWhereUniqueInput
  }

  /**
   * TourInclude findUniqueOrThrow
   */
  export type TourIncludeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInclude
     */
    select?: TourIncludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInclude
     */
    omit?: TourIncludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeInclude<ExtArgs> | null
    /**
     * Filter, which TourInclude to fetch.
     */
    where: TourIncludeWhereUniqueInput
  }

  /**
   * TourInclude findFirst
   */
  export type TourIncludeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInclude
     */
    select?: TourIncludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInclude
     */
    omit?: TourIncludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeInclude<ExtArgs> | null
    /**
     * Filter, which TourInclude to fetch.
     */
    where?: TourIncludeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourIncludes to fetch.
     */
    orderBy?: TourIncludeOrderByWithRelationInput | TourIncludeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourIncludes.
     */
    cursor?: TourIncludeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourIncludes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourIncludes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourIncludes.
     */
    distinct?: TourIncludeScalarFieldEnum | TourIncludeScalarFieldEnum[]
  }

  /**
   * TourInclude findFirstOrThrow
   */
  export type TourIncludeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInclude
     */
    select?: TourIncludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInclude
     */
    omit?: TourIncludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeInclude<ExtArgs> | null
    /**
     * Filter, which TourInclude to fetch.
     */
    where?: TourIncludeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourIncludes to fetch.
     */
    orderBy?: TourIncludeOrderByWithRelationInput | TourIncludeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourIncludes.
     */
    cursor?: TourIncludeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourIncludes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourIncludes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourIncludes.
     */
    distinct?: TourIncludeScalarFieldEnum | TourIncludeScalarFieldEnum[]
  }

  /**
   * TourInclude findMany
   */
  export type TourIncludeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInclude
     */
    select?: TourIncludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInclude
     */
    omit?: TourIncludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeInclude<ExtArgs> | null
    /**
     * Filter, which TourIncludes to fetch.
     */
    where?: TourIncludeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourIncludes to fetch.
     */
    orderBy?: TourIncludeOrderByWithRelationInput | TourIncludeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourIncludes.
     */
    cursor?: TourIncludeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourIncludes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourIncludes.
     */
    skip?: number
    distinct?: TourIncludeScalarFieldEnum | TourIncludeScalarFieldEnum[]
  }

  /**
   * TourInclude create
   */
  export type TourIncludeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInclude
     */
    select?: TourIncludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInclude
     */
    omit?: TourIncludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeInclude<ExtArgs> | null
    /**
     * The data needed to create a TourInclude.
     */
    data: XOR<TourIncludeCreateInput, TourIncludeUncheckedCreateInput>
  }

  /**
   * TourInclude createMany
   */
  export type TourIncludeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourIncludes.
     */
    data: TourIncludeCreateManyInput | TourIncludeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourInclude createManyAndReturn
   */
  export type TourIncludeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInclude
     */
    select?: TourIncludeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourInclude
     */
    omit?: TourIncludeOmit<ExtArgs> | null
    /**
     * The data used to create many TourIncludes.
     */
    data: TourIncludeCreateManyInput | TourIncludeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourInclude update
   */
  export type TourIncludeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInclude
     */
    select?: TourIncludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInclude
     */
    omit?: TourIncludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeInclude<ExtArgs> | null
    /**
     * The data needed to update a TourInclude.
     */
    data: XOR<TourIncludeUpdateInput, TourIncludeUncheckedUpdateInput>
    /**
     * Choose, which TourInclude to update.
     */
    where: TourIncludeWhereUniqueInput
  }

  /**
   * TourInclude updateMany
   */
  export type TourIncludeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourIncludes.
     */
    data: XOR<TourIncludeUpdateManyMutationInput, TourIncludeUncheckedUpdateManyInput>
    /**
     * Filter which TourIncludes to update
     */
    where?: TourIncludeWhereInput
    /**
     * Limit how many TourIncludes to update.
     */
    limit?: number
  }

  /**
   * TourInclude updateManyAndReturn
   */
  export type TourIncludeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInclude
     */
    select?: TourIncludeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourInclude
     */
    omit?: TourIncludeOmit<ExtArgs> | null
    /**
     * The data used to update TourIncludes.
     */
    data: XOR<TourIncludeUpdateManyMutationInput, TourIncludeUncheckedUpdateManyInput>
    /**
     * Filter which TourIncludes to update
     */
    where?: TourIncludeWhereInput
    /**
     * Limit how many TourIncludes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourInclude upsert
   */
  export type TourIncludeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInclude
     */
    select?: TourIncludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInclude
     */
    omit?: TourIncludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeInclude<ExtArgs> | null
    /**
     * The filter to search for the TourInclude to update in case it exists.
     */
    where: TourIncludeWhereUniqueInput
    /**
     * In case the TourInclude found by the `where` argument doesn't exist, create a new TourInclude with this data.
     */
    create: XOR<TourIncludeCreateInput, TourIncludeUncheckedCreateInput>
    /**
     * In case the TourInclude was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourIncludeUpdateInput, TourIncludeUncheckedUpdateInput>
  }

  /**
   * TourInclude delete
   */
  export type TourIncludeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInclude
     */
    select?: TourIncludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInclude
     */
    omit?: TourIncludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeInclude<ExtArgs> | null
    /**
     * Filter which TourInclude to delete.
     */
    where: TourIncludeWhereUniqueInput
  }

  /**
   * TourInclude deleteMany
   */
  export type TourIncludeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourIncludes to delete
     */
    where?: TourIncludeWhereInput
    /**
     * Limit how many TourIncludes to delete.
     */
    limit?: number
  }

  /**
   * TourInclude without action
   */
  export type TourIncludeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInclude
     */
    select?: TourIncludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInclude
     */
    omit?: TourIncludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeInclude<ExtArgs> | null
  }


  /**
   * Model TourExclude
   */

  export type AggregateTourExclude = {
    _count: TourExcludeCountAggregateOutputType | null
    _avg: TourExcludeAvgAggregateOutputType | null
    _sum: TourExcludeSumAggregateOutputType | null
    _min: TourExcludeMinAggregateOutputType | null
    _max: TourExcludeMaxAggregateOutputType | null
  }

  export type TourExcludeAvgAggregateOutputType = {
    order: number | null
  }

  export type TourExcludeSumAggregateOutputType = {
    order: number | null
  }

  export type TourExcludeMinAggregateOutputType = {
    id: string | null
    tourId: string | null
    item: string | null
    order: number | null
  }

  export type TourExcludeMaxAggregateOutputType = {
    id: string | null
    tourId: string | null
    item: string | null
    order: number | null
  }

  export type TourExcludeCountAggregateOutputType = {
    id: number
    tourId: number
    item: number
    order: number
    _all: number
  }


  export type TourExcludeAvgAggregateInputType = {
    order?: true
  }

  export type TourExcludeSumAggregateInputType = {
    order?: true
  }

  export type TourExcludeMinAggregateInputType = {
    id?: true
    tourId?: true
    item?: true
    order?: true
  }

  export type TourExcludeMaxAggregateInputType = {
    id?: true
    tourId?: true
    item?: true
    order?: true
  }

  export type TourExcludeCountAggregateInputType = {
    id?: true
    tourId?: true
    item?: true
    order?: true
    _all?: true
  }

  export type TourExcludeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourExclude to aggregate.
     */
    where?: TourExcludeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourExcludes to fetch.
     */
    orderBy?: TourExcludeOrderByWithRelationInput | TourExcludeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourExcludeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourExcludes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourExcludes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourExcludes
    **/
    _count?: true | TourExcludeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourExcludeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourExcludeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourExcludeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourExcludeMaxAggregateInputType
  }

  export type GetTourExcludeAggregateType<T extends TourExcludeAggregateArgs> = {
        [P in keyof T & keyof AggregateTourExclude]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourExclude[P]>
      : GetScalarType<T[P], AggregateTourExclude[P]>
  }




  export type TourExcludeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourExcludeWhereInput
    orderBy?: TourExcludeOrderByWithAggregationInput | TourExcludeOrderByWithAggregationInput[]
    by: TourExcludeScalarFieldEnum[] | TourExcludeScalarFieldEnum
    having?: TourExcludeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourExcludeCountAggregateInputType | true
    _avg?: TourExcludeAvgAggregateInputType
    _sum?: TourExcludeSumAggregateInputType
    _min?: TourExcludeMinAggregateInputType
    _max?: TourExcludeMaxAggregateInputType
  }

  export type TourExcludeGroupByOutputType = {
    id: string
    tourId: string
    item: string
    order: number
    _count: TourExcludeCountAggregateOutputType | null
    _avg: TourExcludeAvgAggregateOutputType | null
    _sum: TourExcludeSumAggregateOutputType | null
    _min: TourExcludeMinAggregateOutputType | null
    _max: TourExcludeMaxAggregateOutputType | null
  }

  type GetTourExcludeGroupByPayload<T extends TourExcludeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourExcludeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourExcludeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourExcludeGroupByOutputType[P]>
            : GetScalarType<T[P], TourExcludeGroupByOutputType[P]>
        }
      >
    >


  export type TourExcludeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    item?: boolean
    order?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourExclude"]>

  export type TourExcludeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    item?: boolean
    order?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourExclude"]>

  export type TourExcludeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    item?: boolean
    order?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourExclude"]>

  export type TourExcludeSelectScalar = {
    id?: boolean
    tourId?: boolean
    item?: boolean
    order?: boolean
  }

  export type TourExcludeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tourId" | "item" | "order", ExtArgs["result"]["tourExclude"]>
  export type TourExcludeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TourExcludeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TourExcludeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $TourExcludePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourExclude"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tourId: string
      item: string
      order: number
    }, ExtArgs["result"]["tourExclude"]>
    composites: {}
  }

  type TourExcludeGetPayload<S extends boolean | null | undefined | TourExcludeDefaultArgs> = $Result.GetResult<Prisma.$TourExcludePayload, S>

  type TourExcludeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourExcludeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourExcludeCountAggregateInputType | true
    }

  export interface TourExcludeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourExclude'], meta: { name: 'TourExclude' } }
    /**
     * Find zero or one TourExclude that matches the filter.
     * @param {TourExcludeFindUniqueArgs} args - Arguments to find a TourExclude
     * @example
     * // Get one TourExclude
     * const tourExclude = await prisma.tourExclude.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourExcludeFindUniqueArgs>(args: SelectSubset<T, TourExcludeFindUniqueArgs<ExtArgs>>): Prisma__TourExcludeClient<$Result.GetResult<Prisma.$TourExcludePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourExclude that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourExcludeFindUniqueOrThrowArgs} args - Arguments to find a TourExclude
     * @example
     * // Get one TourExclude
     * const tourExclude = await prisma.tourExclude.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourExcludeFindUniqueOrThrowArgs>(args: SelectSubset<T, TourExcludeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourExcludeClient<$Result.GetResult<Prisma.$TourExcludePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourExclude that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourExcludeFindFirstArgs} args - Arguments to find a TourExclude
     * @example
     * // Get one TourExclude
     * const tourExclude = await prisma.tourExclude.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourExcludeFindFirstArgs>(args?: SelectSubset<T, TourExcludeFindFirstArgs<ExtArgs>>): Prisma__TourExcludeClient<$Result.GetResult<Prisma.$TourExcludePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourExclude that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourExcludeFindFirstOrThrowArgs} args - Arguments to find a TourExclude
     * @example
     * // Get one TourExclude
     * const tourExclude = await prisma.tourExclude.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourExcludeFindFirstOrThrowArgs>(args?: SelectSubset<T, TourExcludeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourExcludeClient<$Result.GetResult<Prisma.$TourExcludePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourExcludes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourExcludeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourExcludes
     * const tourExcludes = await prisma.tourExclude.findMany()
     * 
     * // Get first 10 TourExcludes
     * const tourExcludes = await prisma.tourExclude.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourExcludeWithIdOnly = await prisma.tourExclude.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourExcludeFindManyArgs>(args?: SelectSubset<T, TourExcludeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourExcludePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourExclude.
     * @param {TourExcludeCreateArgs} args - Arguments to create a TourExclude.
     * @example
     * // Create one TourExclude
     * const TourExclude = await prisma.tourExclude.create({
     *   data: {
     *     // ... data to create a TourExclude
     *   }
     * })
     * 
     */
    create<T extends TourExcludeCreateArgs>(args: SelectSubset<T, TourExcludeCreateArgs<ExtArgs>>): Prisma__TourExcludeClient<$Result.GetResult<Prisma.$TourExcludePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourExcludes.
     * @param {TourExcludeCreateManyArgs} args - Arguments to create many TourExcludes.
     * @example
     * // Create many TourExcludes
     * const tourExclude = await prisma.tourExclude.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourExcludeCreateManyArgs>(args?: SelectSubset<T, TourExcludeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourExcludes and returns the data saved in the database.
     * @param {TourExcludeCreateManyAndReturnArgs} args - Arguments to create many TourExcludes.
     * @example
     * // Create many TourExcludes
     * const tourExclude = await prisma.tourExclude.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourExcludes and only return the `id`
     * const tourExcludeWithIdOnly = await prisma.tourExclude.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourExcludeCreateManyAndReturnArgs>(args?: SelectSubset<T, TourExcludeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourExcludePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourExclude.
     * @param {TourExcludeDeleteArgs} args - Arguments to delete one TourExclude.
     * @example
     * // Delete one TourExclude
     * const TourExclude = await prisma.tourExclude.delete({
     *   where: {
     *     // ... filter to delete one TourExclude
     *   }
     * })
     * 
     */
    delete<T extends TourExcludeDeleteArgs>(args: SelectSubset<T, TourExcludeDeleteArgs<ExtArgs>>): Prisma__TourExcludeClient<$Result.GetResult<Prisma.$TourExcludePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourExclude.
     * @param {TourExcludeUpdateArgs} args - Arguments to update one TourExclude.
     * @example
     * // Update one TourExclude
     * const tourExclude = await prisma.tourExclude.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourExcludeUpdateArgs>(args: SelectSubset<T, TourExcludeUpdateArgs<ExtArgs>>): Prisma__TourExcludeClient<$Result.GetResult<Prisma.$TourExcludePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourExcludes.
     * @param {TourExcludeDeleteManyArgs} args - Arguments to filter TourExcludes to delete.
     * @example
     * // Delete a few TourExcludes
     * const { count } = await prisma.tourExclude.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourExcludeDeleteManyArgs>(args?: SelectSubset<T, TourExcludeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourExcludes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourExcludeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourExcludes
     * const tourExclude = await prisma.tourExclude.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourExcludeUpdateManyArgs>(args: SelectSubset<T, TourExcludeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourExcludes and returns the data updated in the database.
     * @param {TourExcludeUpdateManyAndReturnArgs} args - Arguments to update many TourExcludes.
     * @example
     * // Update many TourExcludes
     * const tourExclude = await prisma.tourExclude.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourExcludes and only return the `id`
     * const tourExcludeWithIdOnly = await prisma.tourExclude.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TourExcludeUpdateManyAndReturnArgs>(args: SelectSubset<T, TourExcludeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourExcludePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourExclude.
     * @param {TourExcludeUpsertArgs} args - Arguments to update or create a TourExclude.
     * @example
     * // Update or create a TourExclude
     * const tourExclude = await prisma.tourExclude.upsert({
     *   create: {
     *     // ... data to create a TourExclude
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourExclude we want to update
     *   }
     * })
     */
    upsert<T extends TourExcludeUpsertArgs>(args: SelectSubset<T, TourExcludeUpsertArgs<ExtArgs>>): Prisma__TourExcludeClient<$Result.GetResult<Prisma.$TourExcludePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourExcludes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourExcludeCountArgs} args - Arguments to filter TourExcludes to count.
     * @example
     * // Count the number of TourExcludes
     * const count = await prisma.tourExclude.count({
     *   where: {
     *     // ... the filter for the TourExcludes we want to count
     *   }
     * })
    **/
    count<T extends TourExcludeCountArgs>(
      args?: Subset<T, TourExcludeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourExcludeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourExclude.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourExcludeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TourExcludeAggregateArgs>(args: Subset<T, TourExcludeAggregateArgs>): Prisma.PrismaPromise<GetTourExcludeAggregateType<T>>

    /**
     * Group by TourExclude.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourExcludeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TourExcludeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourExcludeGroupByArgs['orderBy'] }
        : { orderBy?: TourExcludeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TourExcludeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourExcludeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourExclude model
   */
  readonly fields: TourExcludeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourExclude.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourExcludeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TourExclude model
   */
  interface TourExcludeFieldRefs {
    readonly id: FieldRef<"TourExclude", 'String'>
    readonly tourId: FieldRef<"TourExclude", 'String'>
    readonly item: FieldRef<"TourExclude", 'String'>
    readonly order: FieldRef<"TourExclude", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TourExclude findUnique
   */
  export type TourExcludeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourExclude
     */
    select?: TourExcludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourExclude
     */
    omit?: TourExcludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourExcludeInclude<ExtArgs> | null
    /**
     * Filter, which TourExclude to fetch.
     */
    where: TourExcludeWhereUniqueInput
  }

  /**
   * TourExclude findUniqueOrThrow
   */
  export type TourExcludeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourExclude
     */
    select?: TourExcludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourExclude
     */
    omit?: TourExcludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourExcludeInclude<ExtArgs> | null
    /**
     * Filter, which TourExclude to fetch.
     */
    where: TourExcludeWhereUniqueInput
  }

  /**
   * TourExclude findFirst
   */
  export type TourExcludeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourExclude
     */
    select?: TourExcludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourExclude
     */
    omit?: TourExcludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourExcludeInclude<ExtArgs> | null
    /**
     * Filter, which TourExclude to fetch.
     */
    where?: TourExcludeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourExcludes to fetch.
     */
    orderBy?: TourExcludeOrderByWithRelationInput | TourExcludeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourExcludes.
     */
    cursor?: TourExcludeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourExcludes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourExcludes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourExcludes.
     */
    distinct?: TourExcludeScalarFieldEnum | TourExcludeScalarFieldEnum[]
  }

  /**
   * TourExclude findFirstOrThrow
   */
  export type TourExcludeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourExclude
     */
    select?: TourExcludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourExclude
     */
    omit?: TourExcludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourExcludeInclude<ExtArgs> | null
    /**
     * Filter, which TourExclude to fetch.
     */
    where?: TourExcludeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourExcludes to fetch.
     */
    orderBy?: TourExcludeOrderByWithRelationInput | TourExcludeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourExcludes.
     */
    cursor?: TourExcludeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourExcludes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourExcludes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourExcludes.
     */
    distinct?: TourExcludeScalarFieldEnum | TourExcludeScalarFieldEnum[]
  }

  /**
   * TourExclude findMany
   */
  export type TourExcludeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourExclude
     */
    select?: TourExcludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourExclude
     */
    omit?: TourExcludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourExcludeInclude<ExtArgs> | null
    /**
     * Filter, which TourExcludes to fetch.
     */
    where?: TourExcludeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourExcludes to fetch.
     */
    orderBy?: TourExcludeOrderByWithRelationInput | TourExcludeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourExcludes.
     */
    cursor?: TourExcludeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourExcludes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourExcludes.
     */
    skip?: number
    distinct?: TourExcludeScalarFieldEnum | TourExcludeScalarFieldEnum[]
  }

  /**
   * TourExclude create
   */
  export type TourExcludeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourExclude
     */
    select?: TourExcludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourExclude
     */
    omit?: TourExcludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourExcludeInclude<ExtArgs> | null
    /**
     * The data needed to create a TourExclude.
     */
    data: XOR<TourExcludeCreateInput, TourExcludeUncheckedCreateInput>
  }

  /**
   * TourExclude createMany
   */
  export type TourExcludeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourExcludes.
     */
    data: TourExcludeCreateManyInput | TourExcludeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourExclude createManyAndReturn
   */
  export type TourExcludeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourExclude
     */
    select?: TourExcludeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourExclude
     */
    omit?: TourExcludeOmit<ExtArgs> | null
    /**
     * The data used to create many TourExcludes.
     */
    data: TourExcludeCreateManyInput | TourExcludeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourExcludeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourExclude update
   */
  export type TourExcludeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourExclude
     */
    select?: TourExcludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourExclude
     */
    omit?: TourExcludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourExcludeInclude<ExtArgs> | null
    /**
     * The data needed to update a TourExclude.
     */
    data: XOR<TourExcludeUpdateInput, TourExcludeUncheckedUpdateInput>
    /**
     * Choose, which TourExclude to update.
     */
    where: TourExcludeWhereUniqueInput
  }

  /**
   * TourExclude updateMany
   */
  export type TourExcludeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourExcludes.
     */
    data: XOR<TourExcludeUpdateManyMutationInput, TourExcludeUncheckedUpdateManyInput>
    /**
     * Filter which TourExcludes to update
     */
    where?: TourExcludeWhereInput
    /**
     * Limit how many TourExcludes to update.
     */
    limit?: number
  }

  /**
   * TourExclude updateManyAndReturn
   */
  export type TourExcludeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourExclude
     */
    select?: TourExcludeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourExclude
     */
    omit?: TourExcludeOmit<ExtArgs> | null
    /**
     * The data used to update TourExcludes.
     */
    data: XOR<TourExcludeUpdateManyMutationInput, TourExcludeUncheckedUpdateManyInput>
    /**
     * Filter which TourExcludes to update
     */
    where?: TourExcludeWhereInput
    /**
     * Limit how many TourExcludes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourExcludeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourExclude upsert
   */
  export type TourExcludeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourExclude
     */
    select?: TourExcludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourExclude
     */
    omit?: TourExcludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourExcludeInclude<ExtArgs> | null
    /**
     * The filter to search for the TourExclude to update in case it exists.
     */
    where: TourExcludeWhereUniqueInput
    /**
     * In case the TourExclude found by the `where` argument doesn't exist, create a new TourExclude with this data.
     */
    create: XOR<TourExcludeCreateInput, TourExcludeUncheckedCreateInput>
    /**
     * In case the TourExclude was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourExcludeUpdateInput, TourExcludeUncheckedUpdateInput>
  }

  /**
   * TourExclude delete
   */
  export type TourExcludeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourExclude
     */
    select?: TourExcludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourExclude
     */
    omit?: TourExcludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourExcludeInclude<ExtArgs> | null
    /**
     * Filter which TourExclude to delete.
     */
    where: TourExcludeWhereUniqueInput
  }

  /**
   * TourExclude deleteMany
   */
  export type TourExcludeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourExcludes to delete
     */
    where?: TourExcludeWhereInput
    /**
     * Limit how many TourExcludes to delete.
     */
    limit?: number
  }

  /**
   * TourExclude without action
   */
  export type TourExcludeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourExclude
     */
    select?: TourExcludeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourExclude
     */
    omit?: TourExcludeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourExcludeInclude<ExtArgs> | null
  }


  /**
   * Model TourFaq
   */

  export type AggregateTourFaq = {
    _count: TourFaqCountAggregateOutputType | null
    _avg: TourFaqAvgAggregateOutputType | null
    _sum: TourFaqSumAggregateOutputType | null
    _min: TourFaqMinAggregateOutputType | null
    _max: TourFaqMaxAggregateOutputType | null
  }

  export type TourFaqAvgAggregateOutputType = {
    order: number | null
  }

  export type TourFaqSumAggregateOutputType = {
    order: number | null
  }

  export type TourFaqMinAggregateOutputType = {
    id: string | null
    tourId: string | null
    question: string | null
    answer: string | null
    order: number | null
  }

  export type TourFaqMaxAggregateOutputType = {
    id: string | null
    tourId: string | null
    question: string | null
    answer: string | null
    order: number | null
  }

  export type TourFaqCountAggregateOutputType = {
    id: number
    tourId: number
    question: number
    answer: number
    order: number
    _all: number
  }


  export type TourFaqAvgAggregateInputType = {
    order?: true
  }

  export type TourFaqSumAggregateInputType = {
    order?: true
  }

  export type TourFaqMinAggregateInputType = {
    id?: true
    tourId?: true
    question?: true
    answer?: true
    order?: true
  }

  export type TourFaqMaxAggregateInputType = {
    id?: true
    tourId?: true
    question?: true
    answer?: true
    order?: true
  }

  export type TourFaqCountAggregateInputType = {
    id?: true
    tourId?: true
    question?: true
    answer?: true
    order?: true
    _all?: true
  }

  export type TourFaqAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourFaq to aggregate.
     */
    where?: TourFaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourFaqs to fetch.
     */
    orderBy?: TourFaqOrderByWithRelationInput | TourFaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourFaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourFaqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourFaqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourFaqs
    **/
    _count?: true | TourFaqCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourFaqAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourFaqSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourFaqMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourFaqMaxAggregateInputType
  }

  export type GetTourFaqAggregateType<T extends TourFaqAggregateArgs> = {
        [P in keyof T & keyof AggregateTourFaq]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourFaq[P]>
      : GetScalarType<T[P], AggregateTourFaq[P]>
  }




  export type TourFaqGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourFaqWhereInput
    orderBy?: TourFaqOrderByWithAggregationInput | TourFaqOrderByWithAggregationInput[]
    by: TourFaqScalarFieldEnum[] | TourFaqScalarFieldEnum
    having?: TourFaqScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourFaqCountAggregateInputType | true
    _avg?: TourFaqAvgAggregateInputType
    _sum?: TourFaqSumAggregateInputType
    _min?: TourFaqMinAggregateInputType
    _max?: TourFaqMaxAggregateInputType
  }

  export type TourFaqGroupByOutputType = {
    id: string
    tourId: string
    question: string
    answer: string
    order: number
    _count: TourFaqCountAggregateOutputType | null
    _avg: TourFaqAvgAggregateOutputType | null
    _sum: TourFaqSumAggregateOutputType | null
    _min: TourFaqMinAggregateOutputType | null
    _max: TourFaqMaxAggregateOutputType | null
  }

  type GetTourFaqGroupByPayload<T extends TourFaqGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourFaqGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourFaqGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourFaqGroupByOutputType[P]>
            : GetScalarType<T[P], TourFaqGroupByOutputType[P]>
        }
      >
    >


  export type TourFaqSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    question?: boolean
    answer?: boolean
    order?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourFaq"]>

  export type TourFaqSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    question?: boolean
    answer?: boolean
    order?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourFaq"]>

  export type TourFaqSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    question?: boolean
    answer?: boolean
    order?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourFaq"]>

  export type TourFaqSelectScalar = {
    id?: boolean
    tourId?: boolean
    question?: boolean
    answer?: boolean
    order?: boolean
  }

  export type TourFaqOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tourId" | "question" | "answer" | "order", ExtArgs["result"]["tourFaq"]>
  export type TourFaqInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TourFaqIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TourFaqIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $TourFaqPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourFaq"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tourId: string
      question: string
      answer: string
      order: number
    }, ExtArgs["result"]["tourFaq"]>
    composites: {}
  }

  type TourFaqGetPayload<S extends boolean | null | undefined | TourFaqDefaultArgs> = $Result.GetResult<Prisma.$TourFaqPayload, S>

  type TourFaqCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourFaqFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourFaqCountAggregateInputType | true
    }

  export interface TourFaqDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourFaq'], meta: { name: 'TourFaq' } }
    /**
     * Find zero or one TourFaq that matches the filter.
     * @param {TourFaqFindUniqueArgs} args - Arguments to find a TourFaq
     * @example
     * // Get one TourFaq
     * const tourFaq = await prisma.tourFaq.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourFaqFindUniqueArgs>(args: SelectSubset<T, TourFaqFindUniqueArgs<ExtArgs>>): Prisma__TourFaqClient<$Result.GetResult<Prisma.$TourFaqPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourFaq that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourFaqFindUniqueOrThrowArgs} args - Arguments to find a TourFaq
     * @example
     * // Get one TourFaq
     * const tourFaq = await prisma.tourFaq.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourFaqFindUniqueOrThrowArgs>(args: SelectSubset<T, TourFaqFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourFaqClient<$Result.GetResult<Prisma.$TourFaqPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourFaq that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFaqFindFirstArgs} args - Arguments to find a TourFaq
     * @example
     * // Get one TourFaq
     * const tourFaq = await prisma.tourFaq.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourFaqFindFirstArgs>(args?: SelectSubset<T, TourFaqFindFirstArgs<ExtArgs>>): Prisma__TourFaqClient<$Result.GetResult<Prisma.$TourFaqPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourFaq that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFaqFindFirstOrThrowArgs} args - Arguments to find a TourFaq
     * @example
     * // Get one TourFaq
     * const tourFaq = await prisma.tourFaq.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourFaqFindFirstOrThrowArgs>(args?: SelectSubset<T, TourFaqFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourFaqClient<$Result.GetResult<Prisma.$TourFaqPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourFaqs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFaqFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourFaqs
     * const tourFaqs = await prisma.tourFaq.findMany()
     * 
     * // Get first 10 TourFaqs
     * const tourFaqs = await prisma.tourFaq.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourFaqWithIdOnly = await prisma.tourFaq.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourFaqFindManyArgs>(args?: SelectSubset<T, TourFaqFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourFaqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourFaq.
     * @param {TourFaqCreateArgs} args - Arguments to create a TourFaq.
     * @example
     * // Create one TourFaq
     * const TourFaq = await prisma.tourFaq.create({
     *   data: {
     *     // ... data to create a TourFaq
     *   }
     * })
     * 
     */
    create<T extends TourFaqCreateArgs>(args: SelectSubset<T, TourFaqCreateArgs<ExtArgs>>): Prisma__TourFaqClient<$Result.GetResult<Prisma.$TourFaqPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourFaqs.
     * @param {TourFaqCreateManyArgs} args - Arguments to create many TourFaqs.
     * @example
     * // Create many TourFaqs
     * const tourFaq = await prisma.tourFaq.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourFaqCreateManyArgs>(args?: SelectSubset<T, TourFaqCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourFaqs and returns the data saved in the database.
     * @param {TourFaqCreateManyAndReturnArgs} args - Arguments to create many TourFaqs.
     * @example
     * // Create many TourFaqs
     * const tourFaq = await prisma.tourFaq.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourFaqs and only return the `id`
     * const tourFaqWithIdOnly = await prisma.tourFaq.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourFaqCreateManyAndReturnArgs>(args?: SelectSubset<T, TourFaqCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourFaqPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourFaq.
     * @param {TourFaqDeleteArgs} args - Arguments to delete one TourFaq.
     * @example
     * // Delete one TourFaq
     * const TourFaq = await prisma.tourFaq.delete({
     *   where: {
     *     // ... filter to delete one TourFaq
     *   }
     * })
     * 
     */
    delete<T extends TourFaqDeleteArgs>(args: SelectSubset<T, TourFaqDeleteArgs<ExtArgs>>): Prisma__TourFaqClient<$Result.GetResult<Prisma.$TourFaqPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourFaq.
     * @param {TourFaqUpdateArgs} args - Arguments to update one TourFaq.
     * @example
     * // Update one TourFaq
     * const tourFaq = await prisma.tourFaq.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourFaqUpdateArgs>(args: SelectSubset<T, TourFaqUpdateArgs<ExtArgs>>): Prisma__TourFaqClient<$Result.GetResult<Prisma.$TourFaqPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourFaqs.
     * @param {TourFaqDeleteManyArgs} args - Arguments to filter TourFaqs to delete.
     * @example
     * // Delete a few TourFaqs
     * const { count } = await prisma.tourFaq.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourFaqDeleteManyArgs>(args?: SelectSubset<T, TourFaqDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourFaqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFaqUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourFaqs
     * const tourFaq = await prisma.tourFaq.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourFaqUpdateManyArgs>(args: SelectSubset<T, TourFaqUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourFaqs and returns the data updated in the database.
     * @param {TourFaqUpdateManyAndReturnArgs} args - Arguments to update many TourFaqs.
     * @example
     * // Update many TourFaqs
     * const tourFaq = await prisma.tourFaq.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourFaqs and only return the `id`
     * const tourFaqWithIdOnly = await prisma.tourFaq.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TourFaqUpdateManyAndReturnArgs>(args: SelectSubset<T, TourFaqUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourFaqPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourFaq.
     * @param {TourFaqUpsertArgs} args - Arguments to update or create a TourFaq.
     * @example
     * // Update or create a TourFaq
     * const tourFaq = await prisma.tourFaq.upsert({
     *   create: {
     *     // ... data to create a TourFaq
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourFaq we want to update
     *   }
     * })
     */
    upsert<T extends TourFaqUpsertArgs>(args: SelectSubset<T, TourFaqUpsertArgs<ExtArgs>>): Prisma__TourFaqClient<$Result.GetResult<Prisma.$TourFaqPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourFaqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFaqCountArgs} args - Arguments to filter TourFaqs to count.
     * @example
     * // Count the number of TourFaqs
     * const count = await prisma.tourFaq.count({
     *   where: {
     *     // ... the filter for the TourFaqs we want to count
     *   }
     * })
    **/
    count<T extends TourFaqCountArgs>(
      args?: Subset<T, TourFaqCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourFaqCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourFaq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFaqAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TourFaqAggregateArgs>(args: Subset<T, TourFaqAggregateArgs>): Prisma.PrismaPromise<GetTourFaqAggregateType<T>>

    /**
     * Group by TourFaq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFaqGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TourFaqGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourFaqGroupByArgs['orderBy'] }
        : { orderBy?: TourFaqGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TourFaqGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourFaqGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourFaq model
   */
  readonly fields: TourFaqFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourFaq.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourFaqClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TourFaq model
   */
  interface TourFaqFieldRefs {
    readonly id: FieldRef<"TourFaq", 'String'>
    readonly tourId: FieldRef<"TourFaq", 'String'>
    readonly question: FieldRef<"TourFaq", 'String'>
    readonly answer: FieldRef<"TourFaq", 'String'>
    readonly order: FieldRef<"TourFaq", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TourFaq findUnique
   */
  export type TourFaqFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourFaq
     */
    select?: TourFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourFaq
     */
    omit?: TourFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourFaqInclude<ExtArgs> | null
    /**
     * Filter, which TourFaq to fetch.
     */
    where: TourFaqWhereUniqueInput
  }

  /**
   * TourFaq findUniqueOrThrow
   */
  export type TourFaqFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourFaq
     */
    select?: TourFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourFaq
     */
    omit?: TourFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourFaqInclude<ExtArgs> | null
    /**
     * Filter, which TourFaq to fetch.
     */
    where: TourFaqWhereUniqueInput
  }

  /**
   * TourFaq findFirst
   */
  export type TourFaqFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourFaq
     */
    select?: TourFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourFaq
     */
    omit?: TourFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourFaqInclude<ExtArgs> | null
    /**
     * Filter, which TourFaq to fetch.
     */
    where?: TourFaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourFaqs to fetch.
     */
    orderBy?: TourFaqOrderByWithRelationInput | TourFaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourFaqs.
     */
    cursor?: TourFaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourFaqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourFaqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourFaqs.
     */
    distinct?: TourFaqScalarFieldEnum | TourFaqScalarFieldEnum[]
  }

  /**
   * TourFaq findFirstOrThrow
   */
  export type TourFaqFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourFaq
     */
    select?: TourFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourFaq
     */
    omit?: TourFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourFaqInclude<ExtArgs> | null
    /**
     * Filter, which TourFaq to fetch.
     */
    where?: TourFaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourFaqs to fetch.
     */
    orderBy?: TourFaqOrderByWithRelationInput | TourFaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourFaqs.
     */
    cursor?: TourFaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourFaqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourFaqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourFaqs.
     */
    distinct?: TourFaqScalarFieldEnum | TourFaqScalarFieldEnum[]
  }

  /**
   * TourFaq findMany
   */
  export type TourFaqFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourFaq
     */
    select?: TourFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourFaq
     */
    omit?: TourFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourFaqInclude<ExtArgs> | null
    /**
     * Filter, which TourFaqs to fetch.
     */
    where?: TourFaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourFaqs to fetch.
     */
    orderBy?: TourFaqOrderByWithRelationInput | TourFaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourFaqs.
     */
    cursor?: TourFaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourFaqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourFaqs.
     */
    skip?: number
    distinct?: TourFaqScalarFieldEnum | TourFaqScalarFieldEnum[]
  }

  /**
   * TourFaq create
   */
  export type TourFaqCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourFaq
     */
    select?: TourFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourFaq
     */
    omit?: TourFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourFaqInclude<ExtArgs> | null
    /**
     * The data needed to create a TourFaq.
     */
    data: XOR<TourFaqCreateInput, TourFaqUncheckedCreateInput>
  }

  /**
   * TourFaq createMany
   */
  export type TourFaqCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourFaqs.
     */
    data: TourFaqCreateManyInput | TourFaqCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourFaq createManyAndReturn
   */
  export type TourFaqCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourFaq
     */
    select?: TourFaqSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourFaq
     */
    omit?: TourFaqOmit<ExtArgs> | null
    /**
     * The data used to create many TourFaqs.
     */
    data: TourFaqCreateManyInput | TourFaqCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourFaqIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourFaq update
   */
  export type TourFaqUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourFaq
     */
    select?: TourFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourFaq
     */
    omit?: TourFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourFaqInclude<ExtArgs> | null
    /**
     * The data needed to update a TourFaq.
     */
    data: XOR<TourFaqUpdateInput, TourFaqUncheckedUpdateInput>
    /**
     * Choose, which TourFaq to update.
     */
    where: TourFaqWhereUniqueInput
  }

  /**
   * TourFaq updateMany
   */
  export type TourFaqUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourFaqs.
     */
    data: XOR<TourFaqUpdateManyMutationInput, TourFaqUncheckedUpdateManyInput>
    /**
     * Filter which TourFaqs to update
     */
    where?: TourFaqWhereInput
    /**
     * Limit how many TourFaqs to update.
     */
    limit?: number
  }

  /**
   * TourFaq updateManyAndReturn
   */
  export type TourFaqUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourFaq
     */
    select?: TourFaqSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourFaq
     */
    omit?: TourFaqOmit<ExtArgs> | null
    /**
     * The data used to update TourFaqs.
     */
    data: XOR<TourFaqUpdateManyMutationInput, TourFaqUncheckedUpdateManyInput>
    /**
     * Filter which TourFaqs to update
     */
    where?: TourFaqWhereInput
    /**
     * Limit how many TourFaqs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourFaqIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourFaq upsert
   */
  export type TourFaqUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourFaq
     */
    select?: TourFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourFaq
     */
    omit?: TourFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourFaqInclude<ExtArgs> | null
    /**
     * The filter to search for the TourFaq to update in case it exists.
     */
    where: TourFaqWhereUniqueInput
    /**
     * In case the TourFaq found by the `where` argument doesn't exist, create a new TourFaq with this data.
     */
    create: XOR<TourFaqCreateInput, TourFaqUncheckedCreateInput>
    /**
     * In case the TourFaq was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourFaqUpdateInput, TourFaqUncheckedUpdateInput>
  }

  /**
   * TourFaq delete
   */
  export type TourFaqDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourFaq
     */
    select?: TourFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourFaq
     */
    omit?: TourFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourFaqInclude<ExtArgs> | null
    /**
     * Filter which TourFaq to delete.
     */
    where: TourFaqWhereUniqueInput
  }

  /**
   * TourFaq deleteMany
   */
  export type TourFaqDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourFaqs to delete
     */
    where?: TourFaqWhereInput
    /**
     * Limit how many TourFaqs to delete.
     */
    limit?: number
  }

  /**
   * TourFaq without action
   */
  export type TourFaqDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourFaq
     */
    select?: TourFaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourFaq
     */
    omit?: TourFaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourFaqInclude<ExtArgs> | null
  }


  /**
   * Model TourGalleryImage
   */

  export type AggregateTourGalleryImage = {
    _count: TourGalleryImageCountAggregateOutputType | null
    _avg: TourGalleryImageAvgAggregateOutputType | null
    _sum: TourGalleryImageSumAggregateOutputType | null
    _min: TourGalleryImageMinAggregateOutputType | null
    _max: TourGalleryImageMaxAggregateOutputType | null
  }

  export type TourGalleryImageAvgAggregateOutputType = {
    order: number | null
  }

  export type TourGalleryImageSumAggregateOutputType = {
    order: number | null
  }

  export type TourGalleryImageMinAggregateOutputType = {
    id: string | null
    tourId: string | null
    imageUrl: string | null
    order: number | null
  }

  export type TourGalleryImageMaxAggregateOutputType = {
    id: string | null
    tourId: string | null
    imageUrl: string | null
    order: number | null
  }

  export type TourGalleryImageCountAggregateOutputType = {
    id: number
    tourId: number
    imageUrl: number
    order: number
    _all: number
  }


  export type TourGalleryImageAvgAggregateInputType = {
    order?: true
  }

  export type TourGalleryImageSumAggregateInputType = {
    order?: true
  }

  export type TourGalleryImageMinAggregateInputType = {
    id?: true
    tourId?: true
    imageUrl?: true
    order?: true
  }

  export type TourGalleryImageMaxAggregateInputType = {
    id?: true
    tourId?: true
    imageUrl?: true
    order?: true
  }

  export type TourGalleryImageCountAggregateInputType = {
    id?: true
    tourId?: true
    imageUrl?: true
    order?: true
    _all?: true
  }

  export type TourGalleryImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourGalleryImage to aggregate.
     */
    where?: TourGalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourGalleryImages to fetch.
     */
    orderBy?: TourGalleryImageOrderByWithRelationInput | TourGalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourGalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourGalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourGalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourGalleryImages
    **/
    _count?: true | TourGalleryImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourGalleryImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourGalleryImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourGalleryImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourGalleryImageMaxAggregateInputType
  }

  export type GetTourGalleryImageAggregateType<T extends TourGalleryImageAggregateArgs> = {
        [P in keyof T & keyof AggregateTourGalleryImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourGalleryImage[P]>
      : GetScalarType<T[P], AggregateTourGalleryImage[P]>
  }




  export type TourGalleryImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourGalleryImageWhereInput
    orderBy?: TourGalleryImageOrderByWithAggregationInput | TourGalleryImageOrderByWithAggregationInput[]
    by: TourGalleryImageScalarFieldEnum[] | TourGalleryImageScalarFieldEnum
    having?: TourGalleryImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourGalleryImageCountAggregateInputType | true
    _avg?: TourGalleryImageAvgAggregateInputType
    _sum?: TourGalleryImageSumAggregateInputType
    _min?: TourGalleryImageMinAggregateInputType
    _max?: TourGalleryImageMaxAggregateInputType
  }

  export type TourGalleryImageGroupByOutputType = {
    id: string
    tourId: string
    imageUrl: string
    order: number
    _count: TourGalleryImageCountAggregateOutputType | null
    _avg: TourGalleryImageAvgAggregateOutputType | null
    _sum: TourGalleryImageSumAggregateOutputType | null
    _min: TourGalleryImageMinAggregateOutputType | null
    _max: TourGalleryImageMaxAggregateOutputType | null
  }

  type GetTourGalleryImageGroupByPayload<T extends TourGalleryImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourGalleryImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourGalleryImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourGalleryImageGroupByOutputType[P]>
            : GetScalarType<T[P], TourGalleryImageGroupByOutputType[P]>
        }
      >
    >


  export type TourGalleryImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    imageUrl?: boolean
    order?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourGalleryImage"]>

  export type TourGalleryImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    imageUrl?: boolean
    order?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourGalleryImage"]>

  export type TourGalleryImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    imageUrl?: boolean
    order?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourGalleryImage"]>

  export type TourGalleryImageSelectScalar = {
    id?: boolean
    tourId?: boolean
    imageUrl?: boolean
    order?: boolean
  }

  export type TourGalleryImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tourId" | "imageUrl" | "order", ExtArgs["result"]["tourGalleryImage"]>
  export type TourGalleryImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TourGalleryImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TourGalleryImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $TourGalleryImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourGalleryImage"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tourId: string
      imageUrl: string
      order: number
    }, ExtArgs["result"]["tourGalleryImage"]>
    composites: {}
  }

  type TourGalleryImageGetPayload<S extends boolean | null | undefined | TourGalleryImageDefaultArgs> = $Result.GetResult<Prisma.$TourGalleryImagePayload, S>

  type TourGalleryImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourGalleryImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourGalleryImageCountAggregateInputType | true
    }

  export interface TourGalleryImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourGalleryImage'], meta: { name: 'TourGalleryImage' } }
    /**
     * Find zero or one TourGalleryImage that matches the filter.
     * @param {TourGalleryImageFindUniqueArgs} args - Arguments to find a TourGalleryImage
     * @example
     * // Get one TourGalleryImage
     * const tourGalleryImage = await prisma.tourGalleryImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourGalleryImageFindUniqueArgs>(args: SelectSubset<T, TourGalleryImageFindUniqueArgs<ExtArgs>>): Prisma__TourGalleryImageClient<$Result.GetResult<Prisma.$TourGalleryImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourGalleryImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourGalleryImageFindUniqueOrThrowArgs} args - Arguments to find a TourGalleryImage
     * @example
     * // Get one TourGalleryImage
     * const tourGalleryImage = await prisma.tourGalleryImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourGalleryImageFindUniqueOrThrowArgs>(args: SelectSubset<T, TourGalleryImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourGalleryImageClient<$Result.GetResult<Prisma.$TourGalleryImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourGalleryImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourGalleryImageFindFirstArgs} args - Arguments to find a TourGalleryImage
     * @example
     * // Get one TourGalleryImage
     * const tourGalleryImage = await prisma.tourGalleryImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourGalleryImageFindFirstArgs>(args?: SelectSubset<T, TourGalleryImageFindFirstArgs<ExtArgs>>): Prisma__TourGalleryImageClient<$Result.GetResult<Prisma.$TourGalleryImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourGalleryImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourGalleryImageFindFirstOrThrowArgs} args - Arguments to find a TourGalleryImage
     * @example
     * // Get one TourGalleryImage
     * const tourGalleryImage = await prisma.tourGalleryImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourGalleryImageFindFirstOrThrowArgs>(args?: SelectSubset<T, TourGalleryImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourGalleryImageClient<$Result.GetResult<Prisma.$TourGalleryImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourGalleryImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourGalleryImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourGalleryImages
     * const tourGalleryImages = await prisma.tourGalleryImage.findMany()
     * 
     * // Get first 10 TourGalleryImages
     * const tourGalleryImages = await prisma.tourGalleryImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourGalleryImageWithIdOnly = await prisma.tourGalleryImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourGalleryImageFindManyArgs>(args?: SelectSubset<T, TourGalleryImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourGalleryImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourGalleryImage.
     * @param {TourGalleryImageCreateArgs} args - Arguments to create a TourGalleryImage.
     * @example
     * // Create one TourGalleryImage
     * const TourGalleryImage = await prisma.tourGalleryImage.create({
     *   data: {
     *     // ... data to create a TourGalleryImage
     *   }
     * })
     * 
     */
    create<T extends TourGalleryImageCreateArgs>(args: SelectSubset<T, TourGalleryImageCreateArgs<ExtArgs>>): Prisma__TourGalleryImageClient<$Result.GetResult<Prisma.$TourGalleryImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourGalleryImages.
     * @param {TourGalleryImageCreateManyArgs} args - Arguments to create many TourGalleryImages.
     * @example
     * // Create many TourGalleryImages
     * const tourGalleryImage = await prisma.tourGalleryImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourGalleryImageCreateManyArgs>(args?: SelectSubset<T, TourGalleryImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourGalleryImages and returns the data saved in the database.
     * @param {TourGalleryImageCreateManyAndReturnArgs} args - Arguments to create many TourGalleryImages.
     * @example
     * // Create many TourGalleryImages
     * const tourGalleryImage = await prisma.tourGalleryImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourGalleryImages and only return the `id`
     * const tourGalleryImageWithIdOnly = await prisma.tourGalleryImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourGalleryImageCreateManyAndReturnArgs>(args?: SelectSubset<T, TourGalleryImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourGalleryImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourGalleryImage.
     * @param {TourGalleryImageDeleteArgs} args - Arguments to delete one TourGalleryImage.
     * @example
     * // Delete one TourGalleryImage
     * const TourGalleryImage = await prisma.tourGalleryImage.delete({
     *   where: {
     *     // ... filter to delete one TourGalleryImage
     *   }
     * })
     * 
     */
    delete<T extends TourGalleryImageDeleteArgs>(args: SelectSubset<T, TourGalleryImageDeleteArgs<ExtArgs>>): Prisma__TourGalleryImageClient<$Result.GetResult<Prisma.$TourGalleryImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourGalleryImage.
     * @param {TourGalleryImageUpdateArgs} args - Arguments to update one TourGalleryImage.
     * @example
     * // Update one TourGalleryImage
     * const tourGalleryImage = await prisma.tourGalleryImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourGalleryImageUpdateArgs>(args: SelectSubset<T, TourGalleryImageUpdateArgs<ExtArgs>>): Prisma__TourGalleryImageClient<$Result.GetResult<Prisma.$TourGalleryImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourGalleryImages.
     * @param {TourGalleryImageDeleteManyArgs} args - Arguments to filter TourGalleryImages to delete.
     * @example
     * // Delete a few TourGalleryImages
     * const { count } = await prisma.tourGalleryImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourGalleryImageDeleteManyArgs>(args?: SelectSubset<T, TourGalleryImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourGalleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourGalleryImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourGalleryImages
     * const tourGalleryImage = await prisma.tourGalleryImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourGalleryImageUpdateManyArgs>(args: SelectSubset<T, TourGalleryImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourGalleryImages and returns the data updated in the database.
     * @param {TourGalleryImageUpdateManyAndReturnArgs} args - Arguments to update many TourGalleryImages.
     * @example
     * // Update many TourGalleryImages
     * const tourGalleryImage = await prisma.tourGalleryImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourGalleryImages and only return the `id`
     * const tourGalleryImageWithIdOnly = await prisma.tourGalleryImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TourGalleryImageUpdateManyAndReturnArgs>(args: SelectSubset<T, TourGalleryImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourGalleryImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourGalleryImage.
     * @param {TourGalleryImageUpsertArgs} args - Arguments to update or create a TourGalleryImage.
     * @example
     * // Update or create a TourGalleryImage
     * const tourGalleryImage = await prisma.tourGalleryImage.upsert({
     *   create: {
     *     // ... data to create a TourGalleryImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourGalleryImage we want to update
     *   }
     * })
     */
    upsert<T extends TourGalleryImageUpsertArgs>(args: SelectSubset<T, TourGalleryImageUpsertArgs<ExtArgs>>): Prisma__TourGalleryImageClient<$Result.GetResult<Prisma.$TourGalleryImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourGalleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourGalleryImageCountArgs} args - Arguments to filter TourGalleryImages to count.
     * @example
     * // Count the number of TourGalleryImages
     * const count = await prisma.tourGalleryImage.count({
     *   where: {
     *     // ... the filter for the TourGalleryImages we want to count
     *   }
     * })
    **/
    count<T extends TourGalleryImageCountArgs>(
      args?: Subset<T, TourGalleryImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourGalleryImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourGalleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourGalleryImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TourGalleryImageAggregateArgs>(args: Subset<T, TourGalleryImageAggregateArgs>): Prisma.PrismaPromise<GetTourGalleryImageAggregateType<T>>

    /**
     * Group by TourGalleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourGalleryImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TourGalleryImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourGalleryImageGroupByArgs['orderBy'] }
        : { orderBy?: TourGalleryImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TourGalleryImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourGalleryImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourGalleryImage model
   */
  readonly fields: TourGalleryImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourGalleryImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourGalleryImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TourGalleryImage model
   */
  interface TourGalleryImageFieldRefs {
    readonly id: FieldRef<"TourGalleryImage", 'String'>
    readonly tourId: FieldRef<"TourGalleryImage", 'String'>
    readonly imageUrl: FieldRef<"TourGalleryImage", 'String'>
    readonly order: FieldRef<"TourGalleryImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TourGalleryImage findUnique
   */
  export type TourGalleryImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourGalleryImage
     */
    select?: TourGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourGalleryImage
     */
    omit?: TourGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourGalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which TourGalleryImage to fetch.
     */
    where: TourGalleryImageWhereUniqueInput
  }

  /**
   * TourGalleryImage findUniqueOrThrow
   */
  export type TourGalleryImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourGalleryImage
     */
    select?: TourGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourGalleryImage
     */
    omit?: TourGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourGalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which TourGalleryImage to fetch.
     */
    where: TourGalleryImageWhereUniqueInput
  }

  /**
   * TourGalleryImage findFirst
   */
  export type TourGalleryImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourGalleryImage
     */
    select?: TourGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourGalleryImage
     */
    omit?: TourGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourGalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which TourGalleryImage to fetch.
     */
    where?: TourGalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourGalleryImages to fetch.
     */
    orderBy?: TourGalleryImageOrderByWithRelationInput | TourGalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourGalleryImages.
     */
    cursor?: TourGalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourGalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourGalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourGalleryImages.
     */
    distinct?: TourGalleryImageScalarFieldEnum | TourGalleryImageScalarFieldEnum[]
  }

  /**
   * TourGalleryImage findFirstOrThrow
   */
  export type TourGalleryImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourGalleryImage
     */
    select?: TourGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourGalleryImage
     */
    omit?: TourGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourGalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which TourGalleryImage to fetch.
     */
    where?: TourGalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourGalleryImages to fetch.
     */
    orderBy?: TourGalleryImageOrderByWithRelationInput | TourGalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourGalleryImages.
     */
    cursor?: TourGalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourGalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourGalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourGalleryImages.
     */
    distinct?: TourGalleryImageScalarFieldEnum | TourGalleryImageScalarFieldEnum[]
  }

  /**
   * TourGalleryImage findMany
   */
  export type TourGalleryImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourGalleryImage
     */
    select?: TourGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourGalleryImage
     */
    omit?: TourGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourGalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which TourGalleryImages to fetch.
     */
    where?: TourGalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourGalleryImages to fetch.
     */
    orderBy?: TourGalleryImageOrderByWithRelationInput | TourGalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourGalleryImages.
     */
    cursor?: TourGalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourGalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourGalleryImages.
     */
    skip?: number
    distinct?: TourGalleryImageScalarFieldEnum | TourGalleryImageScalarFieldEnum[]
  }

  /**
   * TourGalleryImage create
   */
  export type TourGalleryImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourGalleryImage
     */
    select?: TourGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourGalleryImage
     */
    omit?: TourGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourGalleryImageInclude<ExtArgs> | null
    /**
     * The data needed to create a TourGalleryImage.
     */
    data: XOR<TourGalleryImageCreateInput, TourGalleryImageUncheckedCreateInput>
  }

  /**
   * TourGalleryImage createMany
   */
  export type TourGalleryImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourGalleryImages.
     */
    data: TourGalleryImageCreateManyInput | TourGalleryImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourGalleryImage createManyAndReturn
   */
  export type TourGalleryImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourGalleryImage
     */
    select?: TourGalleryImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourGalleryImage
     */
    omit?: TourGalleryImageOmit<ExtArgs> | null
    /**
     * The data used to create many TourGalleryImages.
     */
    data: TourGalleryImageCreateManyInput | TourGalleryImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourGalleryImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourGalleryImage update
   */
  export type TourGalleryImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourGalleryImage
     */
    select?: TourGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourGalleryImage
     */
    omit?: TourGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourGalleryImageInclude<ExtArgs> | null
    /**
     * The data needed to update a TourGalleryImage.
     */
    data: XOR<TourGalleryImageUpdateInput, TourGalleryImageUncheckedUpdateInput>
    /**
     * Choose, which TourGalleryImage to update.
     */
    where: TourGalleryImageWhereUniqueInput
  }

  /**
   * TourGalleryImage updateMany
   */
  export type TourGalleryImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourGalleryImages.
     */
    data: XOR<TourGalleryImageUpdateManyMutationInput, TourGalleryImageUncheckedUpdateManyInput>
    /**
     * Filter which TourGalleryImages to update
     */
    where?: TourGalleryImageWhereInput
    /**
     * Limit how many TourGalleryImages to update.
     */
    limit?: number
  }

  /**
   * TourGalleryImage updateManyAndReturn
   */
  export type TourGalleryImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourGalleryImage
     */
    select?: TourGalleryImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourGalleryImage
     */
    omit?: TourGalleryImageOmit<ExtArgs> | null
    /**
     * The data used to update TourGalleryImages.
     */
    data: XOR<TourGalleryImageUpdateManyMutationInput, TourGalleryImageUncheckedUpdateManyInput>
    /**
     * Filter which TourGalleryImages to update
     */
    where?: TourGalleryImageWhereInput
    /**
     * Limit how many TourGalleryImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourGalleryImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourGalleryImage upsert
   */
  export type TourGalleryImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourGalleryImage
     */
    select?: TourGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourGalleryImage
     */
    omit?: TourGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourGalleryImageInclude<ExtArgs> | null
    /**
     * The filter to search for the TourGalleryImage to update in case it exists.
     */
    where: TourGalleryImageWhereUniqueInput
    /**
     * In case the TourGalleryImage found by the `where` argument doesn't exist, create a new TourGalleryImage with this data.
     */
    create: XOR<TourGalleryImageCreateInput, TourGalleryImageUncheckedCreateInput>
    /**
     * In case the TourGalleryImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourGalleryImageUpdateInput, TourGalleryImageUncheckedUpdateInput>
  }

  /**
   * TourGalleryImage delete
   */
  export type TourGalleryImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourGalleryImage
     */
    select?: TourGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourGalleryImage
     */
    omit?: TourGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourGalleryImageInclude<ExtArgs> | null
    /**
     * Filter which TourGalleryImage to delete.
     */
    where: TourGalleryImageWhereUniqueInput
  }

  /**
   * TourGalleryImage deleteMany
   */
  export type TourGalleryImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourGalleryImages to delete
     */
    where?: TourGalleryImageWhereInput
    /**
     * Limit how many TourGalleryImages to delete.
     */
    limit?: number
  }

  /**
   * TourGalleryImage without action
   */
  export type TourGalleryImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourGalleryImage
     */
    select?: TourGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourGalleryImage
     */
    omit?: TourGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourGalleryImageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    refresh_token_expires_in: 'refresh_token_expires_in'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    username: 'username',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const InquiryScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    phone: 'phone',
    plannedMonth: 'plannedMonth',
    consentAccepted: 'consentAccepted',
    createdAt: 'createdAt'
  };

  export type InquiryScalarFieldEnum = (typeof InquiryScalarFieldEnum)[keyof typeof InquiryScalarFieldEnum]


  export const CmsSectionScalarFieldEnum: {
    id: 'id',
    key: 'key',
    data: 'data',
    updatedAt: 'updatedAt',
    updatedById: 'updatedById'
  };

  export type CmsSectionScalarFieldEnum = (typeof CmsSectionScalarFieldEnum)[keyof typeof CmsSectionScalarFieldEnum]


  export const TourScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    category: 'category',
    durationDays: 'durationDays',
    priceFrom: 'priceFrom',
    currency: 'currency',
    heroImage: 'heroImage',
    shortBlurb: 'shortBlurb',
    seoTitle: 'seoTitle',
    seoDescription: 'seoDescription',
    isPublished: 'isPublished',
    isLandingFeatured: 'isLandingFeatured',
    landingFeaturedOrder: 'landingFeaturedOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TourScalarFieldEnum = (typeof TourScalarFieldEnum)[keyof typeof TourScalarFieldEnum]


  export const TourBadgeScalarFieldEnum: {
    id: 'id',
    tourId: 'tourId',
    label: 'label',
    order: 'order'
  };

  export type TourBadgeScalarFieldEnum = (typeof TourBadgeScalarFieldEnum)[keyof typeof TourBadgeScalarFieldEnum]


  export const TourItineraryStepScalarFieldEnum: {
    id: 'id',
    tourId: 'tourId',
    day: 'day',
    title: 'title',
    description: 'description',
    order: 'order'
  };

  export type TourItineraryStepScalarFieldEnum = (typeof TourItineraryStepScalarFieldEnum)[keyof typeof TourItineraryStepScalarFieldEnum]


  export const TourIncludeScalarFieldEnum: {
    id: 'id',
    tourId: 'tourId',
    item: 'item',
    order: 'order'
  };

  export type TourIncludeScalarFieldEnum = (typeof TourIncludeScalarFieldEnum)[keyof typeof TourIncludeScalarFieldEnum]


  export const TourExcludeScalarFieldEnum: {
    id: 'id',
    tourId: 'tourId',
    item: 'item',
    order: 'order'
  };

  export type TourExcludeScalarFieldEnum = (typeof TourExcludeScalarFieldEnum)[keyof typeof TourExcludeScalarFieldEnum]


  export const TourFaqScalarFieldEnum: {
    id: 'id',
    tourId: 'tourId',
    question: 'question',
    answer: 'answer',
    order: 'order'
  };

  export type TourFaqScalarFieldEnum = (typeof TourFaqScalarFieldEnum)[keyof typeof TourFaqScalarFieldEnum]


  export const TourGalleryImageScalarFieldEnum: {
    id: 'id',
    tourId: 'tourId',
    imageUrl: 'imageUrl',
    order: 'order'
  };

  export type TourGalleryImageScalarFieldEnum = (typeof TourGalleryImageScalarFieldEnum)[keyof typeof TourGalleryImageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AdminRole'
   */
  export type EnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole'>
    


  /**
   * Reference to a field of type 'AdminRole[]'
   */
  export type ListEnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'TourCategory'
   */
  export type EnumTourCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TourCategory'>
    


  /**
   * Reference to a field of type 'TourCategory[]'
   */
  export type ListEnumTourCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TourCategory[]'>
    


  /**
   * Reference to a field of type 'TourCurrency'
   */
  export type EnumTourCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TourCurrency'>
    


  /**
   * Reference to a field of type 'TourCurrency[]'
   */
  export type ListEnumTourCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TourCurrency[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    name?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    createdById?: StringWithAggregatesFilter<"Post"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumAdminRoleFilter<"User"> | $Enums.AdminRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    posts?: PostListRelationFilter
    cmsSections?: CmsSectionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    cmsSections?: CmsSectionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumAdminRoleFilter<"User"> | $Enums.AdminRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    posts?: PostListRelationFilter
    cmsSections?: CmsSectionListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumAdminRoleWithAggregatesFilter<"User"> | $Enums.AdminRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type InquiryWhereInput = {
    AND?: InquiryWhereInput | InquiryWhereInput[]
    OR?: InquiryWhereInput[]
    NOT?: InquiryWhereInput | InquiryWhereInput[]
    id?: StringFilter<"Inquiry"> | string
    fullName?: StringFilter<"Inquiry"> | string
    phone?: StringFilter<"Inquiry"> | string
    plannedMonth?: StringFilter<"Inquiry"> | string
    consentAccepted?: BoolFilter<"Inquiry"> | boolean
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
  }

  export type InquiryOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    plannedMonth?: SortOrder
    consentAccepted?: SortOrder
    createdAt?: SortOrder
  }

  export type InquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InquiryWhereInput | InquiryWhereInput[]
    OR?: InquiryWhereInput[]
    NOT?: InquiryWhereInput | InquiryWhereInput[]
    fullName?: StringFilter<"Inquiry"> | string
    phone?: StringFilter<"Inquiry"> | string
    plannedMonth?: StringFilter<"Inquiry"> | string
    consentAccepted?: BoolFilter<"Inquiry"> | boolean
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
  }, "id">

  export type InquiryOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    plannedMonth?: SortOrder
    consentAccepted?: SortOrder
    createdAt?: SortOrder
    _count?: InquiryCountOrderByAggregateInput
    _max?: InquiryMaxOrderByAggregateInput
    _min?: InquiryMinOrderByAggregateInput
  }

  export type InquiryScalarWhereWithAggregatesInput = {
    AND?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[]
    OR?: InquiryScalarWhereWithAggregatesInput[]
    NOT?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inquiry"> | string
    fullName?: StringWithAggregatesFilter<"Inquiry"> | string
    phone?: StringWithAggregatesFilter<"Inquiry"> | string
    plannedMonth?: StringWithAggregatesFilter<"Inquiry"> | string
    consentAccepted?: BoolWithAggregatesFilter<"Inquiry"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Inquiry"> | Date | string
  }

  export type CmsSectionWhereInput = {
    AND?: CmsSectionWhereInput | CmsSectionWhereInput[]
    OR?: CmsSectionWhereInput[]
    NOT?: CmsSectionWhereInput | CmsSectionWhereInput[]
    id?: StringFilter<"CmsSection"> | string
    key?: StringFilter<"CmsSection"> | string
    data?: JsonFilter<"CmsSection">
    updatedAt?: DateTimeFilter<"CmsSection"> | Date | string
    updatedById?: StringNullableFilter<"CmsSection"> | string | null
    updatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type CmsSectionOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    data?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrderInput | SortOrder
    updatedBy?: UserOrderByWithRelationInput
  }

  export type CmsSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: CmsSectionWhereInput | CmsSectionWhereInput[]
    OR?: CmsSectionWhereInput[]
    NOT?: CmsSectionWhereInput | CmsSectionWhereInput[]
    data?: JsonFilter<"CmsSection">
    updatedAt?: DateTimeFilter<"CmsSection"> | Date | string
    updatedById?: StringNullableFilter<"CmsSection"> | string | null
    updatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "key">

  export type CmsSectionOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    data?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrderInput | SortOrder
    _count?: CmsSectionCountOrderByAggregateInput
    _max?: CmsSectionMaxOrderByAggregateInput
    _min?: CmsSectionMinOrderByAggregateInput
  }

  export type CmsSectionScalarWhereWithAggregatesInput = {
    AND?: CmsSectionScalarWhereWithAggregatesInput | CmsSectionScalarWhereWithAggregatesInput[]
    OR?: CmsSectionScalarWhereWithAggregatesInput[]
    NOT?: CmsSectionScalarWhereWithAggregatesInput | CmsSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CmsSection"> | string
    key?: StringWithAggregatesFilter<"CmsSection"> | string
    data?: JsonWithAggregatesFilter<"CmsSection">
    updatedAt?: DateTimeWithAggregatesFilter<"CmsSection"> | Date | string
    updatedById?: StringNullableWithAggregatesFilter<"CmsSection"> | string | null
  }

  export type TourWhereInput = {
    AND?: TourWhereInput | TourWhereInput[]
    OR?: TourWhereInput[]
    NOT?: TourWhereInput | TourWhereInput[]
    id?: StringFilter<"Tour"> | string
    slug?: StringFilter<"Tour"> | string
    title?: StringFilter<"Tour"> | string
    category?: EnumTourCategoryFilter<"Tour"> | $Enums.TourCategory
    durationDays?: IntFilter<"Tour"> | number
    priceFrom?: IntFilter<"Tour"> | number
    currency?: EnumTourCurrencyFilter<"Tour"> | $Enums.TourCurrency
    heroImage?: StringFilter<"Tour"> | string
    shortBlurb?: StringFilter<"Tour"> | string
    seoTitle?: StringFilter<"Tour"> | string
    seoDescription?: StringFilter<"Tour"> | string
    isPublished?: BoolFilter<"Tour"> | boolean
    isLandingFeatured?: BoolFilter<"Tour"> | boolean
    landingFeaturedOrder?: IntNullableFilter<"Tour"> | number | null
    createdAt?: DateTimeFilter<"Tour"> | Date | string
    updatedAt?: DateTimeFilter<"Tour"> | Date | string
    badges?: TourBadgeListRelationFilter
    itinerarySteps?: TourItineraryStepListRelationFilter
    includes?: TourIncludeListRelationFilter
    excludes?: TourExcludeListRelationFilter
    faqs?: TourFaqListRelationFilter
    galleryImages?: TourGalleryImageListRelationFilter
  }

  export type TourOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    category?: SortOrder
    durationDays?: SortOrder
    priceFrom?: SortOrder
    currency?: SortOrder
    heroImage?: SortOrder
    shortBlurb?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    isPublished?: SortOrder
    isLandingFeatured?: SortOrder
    landingFeaturedOrder?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    badges?: TourBadgeOrderByRelationAggregateInput
    itinerarySteps?: TourItineraryStepOrderByRelationAggregateInput
    includes?: TourIncludeOrderByRelationAggregateInput
    excludes?: TourExcludeOrderByRelationAggregateInput
    faqs?: TourFaqOrderByRelationAggregateInput
    galleryImages?: TourGalleryImageOrderByRelationAggregateInput
  }

  export type TourWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TourWhereInput | TourWhereInput[]
    OR?: TourWhereInput[]
    NOT?: TourWhereInput | TourWhereInput[]
    title?: StringFilter<"Tour"> | string
    category?: EnumTourCategoryFilter<"Tour"> | $Enums.TourCategory
    durationDays?: IntFilter<"Tour"> | number
    priceFrom?: IntFilter<"Tour"> | number
    currency?: EnumTourCurrencyFilter<"Tour"> | $Enums.TourCurrency
    heroImage?: StringFilter<"Tour"> | string
    shortBlurb?: StringFilter<"Tour"> | string
    seoTitle?: StringFilter<"Tour"> | string
    seoDescription?: StringFilter<"Tour"> | string
    isPublished?: BoolFilter<"Tour"> | boolean
    isLandingFeatured?: BoolFilter<"Tour"> | boolean
    landingFeaturedOrder?: IntNullableFilter<"Tour"> | number | null
    createdAt?: DateTimeFilter<"Tour"> | Date | string
    updatedAt?: DateTimeFilter<"Tour"> | Date | string
    badges?: TourBadgeListRelationFilter
    itinerarySteps?: TourItineraryStepListRelationFilter
    includes?: TourIncludeListRelationFilter
    excludes?: TourExcludeListRelationFilter
    faqs?: TourFaqListRelationFilter
    galleryImages?: TourGalleryImageListRelationFilter
  }, "id" | "slug">

  export type TourOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    category?: SortOrder
    durationDays?: SortOrder
    priceFrom?: SortOrder
    currency?: SortOrder
    heroImage?: SortOrder
    shortBlurb?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    isPublished?: SortOrder
    isLandingFeatured?: SortOrder
    landingFeaturedOrder?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TourCountOrderByAggregateInput
    _avg?: TourAvgOrderByAggregateInput
    _max?: TourMaxOrderByAggregateInput
    _min?: TourMinOrderByAggregateInput
    _sum?: TourSumOrderByAggregateInput
  }

  export type TourScalarWhereWithAggregatesInput = {
    AND?: TourScalarWhereWithAggregatesInput | TourScalarWhereWithAggregatesInput[]
    OR?: TourScalarWhereWithAggregatesInput[]
    NOT?: TourScalarWhereWithAggregatesInput | TourScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tour"> | string
    slug?: StringWithAggregatesFilter<"Tour"> | string
    title?: StringWithAggregatesFilter<"Tour"> | string
    category?: EnumTourCategoryWithAggregatesFilter<"Tour"> | $Enums.TourCategory
    durationDays?: IntWithAggregatesFilter<"Tour"> | number
    priceFrom?: IntWithAggregatesFilter<"Tour"> | number
    currency?: EnumTourCurrencyWithAggregatesFilter<"Tour"> | $Enums.TourCurrency
    heroImage?: StringWithAggregatesFilter<"Tour"> | string
    shortBlurb?: StringWithAggregatesFilter<"Tour"> | string
    seoTitle?: StringWithAggregatesFilter<"Tour"> | string
    seoDescription?: StringWithAggregatesFilter<"Tour"> | string
    isPublished?: BoolWithAggregatesFilter<"Tour"> | boolean
    isLandingFeatured?: BoolWithAggregatesFilter<"Tour"> | boolean
    landingFeaturedOrder?: IntNullableWithAggregatesFilter<"Tour"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Tour"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tour"> | Date | string
  }

  export type TourBadgeWhereInput = {
    AND?: TourBadgeWhereInput | TourBadgeWhereInput[]
    OR?: TourBadgeWhereInput[]
    NOT?: TourBadgeWhereInput | TourBadgeWhereInput[]
    id?: StringFilter<"TourBadge"> | string
    tourId?: StringFilter<"TourBadge"> | string
    label?: StringFilter<"TourBadge"> | string
    order?: IntFilter<"TourBadge"> | number
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }

  export type TourBadgeOrderByWithRelationInput = {
    id?: SortOrder
    tourId?: SortOrder
    label?: SortOrder
    order?: SortOrder
    tour?: TourOrderByWithRelationInput
  }

  export type TourBadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TourBadgeWhereInput | TourBadgeWhereInput[]
    OR?: TourBadgeWhereInput[]
    NOT?: TourBadgeWhereInput | TourBadgeWhereInput[]
    tourId?: StringFilter<"TourBadge"> | string
    label?: StringFilter<"TourBadge"> | string
    order?: IntFilter<"TourBadge"> | number
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }, "id">

  export type TourBadgeOrderByWithAggregationInput = {
    id?: SortOrder
    tourId?: SortOrder
    label?: SortOrder
    order?: SortOrder
    _count?: TourBadgeCountOrderByAggregateInput
    _avg?: TourBadgeAvgOrderByAggregateInput
    _max?: TourBadgeMaxOrderByAggregateInput
    _min?: TourBadgeMinOrderByAggregateInput
    _sum?: TourBadgeSumOrderByAggregateInput
  }

  export type TourBadgeScalarWhereWithAggregatesInput = {
    AND?: TourBadgeScalarWhereWithAggregatesInput | TourBadgeScalarWhereWithAggregatesInput[]
    OR?: TourBadgeScalarWhereWithAggregatesInput[]
    NOT?: TourBadgeScalarWhereWithAggregatesInput | TourBadgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TourBadge"> | string
    tourId?: StringWithAggregatesFilter<"TourBadge"> | string
    label?: StringWithAggregatesFilter<"TourBadge"> | string
    order?: IntWithAggregatesFilter<"TourBadge"> | number
  }

  export type TourItineraryStepWhereInput = {
    AND?: TourItineraryStepWhereInput | TourItineraryStepWhereInput[]
    OR?: TourItineraryStepWhereInput[]
    NOT?: TourItineraryStepWhereInput | TourItineraryStepWhereInput[]
    id?: StringFilter<"TourItineraryStep"> | string
    tourId?: StringFilter<"TourItineraryStep"> | string
    day?: StringFilter<"TourItineraryStep"> | string
    title?: StringFilter<"TourItineraryStep"> | string
    description?: StringFilter<"TourItineraryStep"> | string
    order?: IntFilter<"TourItineraryStep"> | number
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }

  export type TourItineraryStepOrderByWithRelationInput = {
    id?: SortOrder
    tourId?: SortOrder
    day?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    tour?: TourOrderByWithRelationInput
  }

  export type TourItineraryStepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TourItineraryStepWhereInput | TourItineraryStepWhereInput[]
    OR?: TourItineraryStepWhereInput[]
    NOT?: TourItineraryStepWhereInput | TourItineraryStepWhereInput[]
    tourId?: StringFilter<"TourItineraryStep"> | string
    day?: StringFilter<"TourItineraryStep"> | string
    title?: StringFilter<"TourItineraryStep"> | string
    description?: StringFilter<"TourItineraryStep"> | string
    order?: IntFilter<"TourItineraryStep"> | number
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }, "id">

  export type TourItineraryStepOrderByWithAggregationInput = {
    id?: SortOrder
    tourId?: SortOrder
    day?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    _count?: TourItineraryStepCountOrderByAggregateInput
    _avg?: TourItineraryStepAvgOrderByAggregateInput
    _max?: TourItineraryStepMaxOrderByAggregateInput
    _min?: TourItineraryStepMinOrderByAggregateInput
    _sum?: TourItineraryStepSumOrderByAggregateInput
  }

  export type TourItineraryStepScalarWhereWithAggregatesInput = {
    AND?: TourItineraryStepScalarWhereWithAggregatesInput | TourItineraryStepScalarWhereWithAggregatesInput[]
    OR?: TourItineraryStepScalarWhereWithAggregatesInput[]
    NOT?: TourItineraryStepScalarWhereWithAggregatesInput | TourItineraryStepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TourItineraryStep"> | string
    tourId?: StringWithAggregatesFilter<"TourItineraryStep"> | string
    day?: StringWithAggregatesFilter<"TourItineraryStep"> | string
    title?: StringWithAggregatesFilter<"TourItineraryStep"> | string
    description?: StringWithAggregatesFilter<"TourItineraryStep"> | string
    order?: IntWithAggregatesFilter<"TourItineraryStep"> | number
  }

  export type TourIncludeWhereInput = {
    AND?: TourIncludeWhereInput | TourIncludeWhereInput[]
    OR?: TourIncludeWhereInput[]
    NOT?: TourIncludeWhereInput | TourIncludeWhereInput[]
    id?: StringFilter<"TourInclude"> | string
    tourId?: StringFilter<"TourInclude"> | string
    item?: StringFilter<"TourInclude"> | string
    order?: IntFilter<"TourInclude"> | number
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }

  export type TourIncludeOrderByWithRelationInput = {
    id?: SortOrder
    tourId?: SortOrder
    item?: SortOrder
    order?: SortOrder
    tour?: TourOrderByWithRelationInput
  }

  export type TourIncludeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TourIncludeWhereInput | TourIncludeWhereInput[]
    OR?: TourIncludeWhereInput[]
    NOT?: TourIncludeWhereInput | TourIncludeWhereInput[]
    tourId?: StringFilter<"TourInclude"> | string
    item?: StringFilter<"TourInclude"> | string
    order?: IntFilter<"TourInclude"> | number
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }, "id">

  export type TourIncludeOrderByWithAggregationInput = {
    id?: SortOrder
    tourId?: SortOrder
    item?: SortOrder
    order?: SortOrder
    _count?: TourIncludeCountOrderByAggregateInput
    _avg?: TourIncludeAvgOrderByAggregateInput
    _max?: TourIncludeMaxOrderByAggregateInput
    _min?: TourIncludeMinOrderByAggregateInput
    _sum?: TourIncludeSumOrderByAggregateInput
  }

  export type TourIncludeScalarWhereWithAggregatesInput = {
    AND?: TourIncludeScalarWhereWithAggregatesInput | TourIncludeScalarWhereWithAggregatesInput[]
    OR?: TourIncludeScalarWhereWithAggregatesInput[]
    NOT?: TourIncludeScalarWhereWithAggregatesInput | TourIncludeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TourInclude"> | string
    tourId?: StringWithAggregatesFilter<"TourInclude"> | string
    item?: StringWithAggregatesFilter<"TourInclude"> | string
    order?: IntWithAggregatesFilter<"TourInclude"> | number
  }

  export type TourExcludeWhereInput = {
    AND?: TourExcludeWhereInput | TourExcludeWhereInput[]
    OR?: TourExcludeWhereInput[]
    NOT?: TourExcludeWhereInput | TourExcludeWhereInput[]
    id?: StringFilter<"TourExclude"> | string
    tourId?: StringFilter<"TourExclude"> | string
    item?: StringFilter<"TourExclude"> | string
    order?: IntFilter<"TourExclude"> | number
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }

  export type TourExcludeOrderByWithRelationInput = {
    id?: SortOrder
    tourId?: SortOrder
    item?: SortOrder
    order?: SortOrder
    tour?: TourOrderByWithRelationInput
  }

  export type TourExcludeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TourExcludeWhereInput | TourExcludeWhereInput[]
    OR?: TourExcludeWhereInput[]
    NOT?: TourExcludeWhereInput | TourExcludeWhereInput[]
    tourId?: StringFilter<"TourExclude"> | string
    item?: StringFilter<"TourExclude"> | string
    order?: IntFilter<"TourExclude"> | number
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }, "id">

  export type TourExcludeOrderByWithAggregationInput = {
    id?: SortOrder
    tourId?: SortOrder
    item?: SortOrder
    order?: SortOrder
    _count?: TourExcludeCountOrderByAggregateInput
    _avg?: TourExcludeAvgOrderByAggregateInput
    _max?: TourExcludeMaxOrderByAggregateInput
    _min?: TourExcludeMinOrderByAggregateInput
    _sum?: TourExcludeSumOrderByAggregateInput
  }

  export type TourExcludeScalarWhereWithAggregatesInput = {
    AND?: TourExcludeScalarWhereWithAggregatesInput | TourExcludeScalarWhereWithAggregatesInput[]
    OR?: TourExcludeScalarWhereWithAggregatesInput[]
    NOT?: TourExcludeScalarWhereWithAggregatesInput | TourExcludeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TourExclude"> | string
    tourId?: StringWithAggregatesFilter<"TourExclude"> | string
    item?: StringWithAggregatesFilter<"TourExclude"> | string
    order?: IntWithAggregatesFilter<"TourExclude"> | number
  }

  export type TourFaqWhereInput = {
    AND?: TourFaqWhereInput | TourFaqWhereInput[]
    OR?: TourFaqWhereInput[]
    NOT?: TourFaqWhereInput | TourFaqWhereInput[]
    id?: StringFilter<"TourFaq"> | string
    tourId?: StringFilter<"TourFaq"> | string
    question?: StringFilter<"TourFaq"> | string
    answer?: StringFilter<"TourFaq"> | string
    order?: IntFilter<"TourFaq"> | number
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }

  export type TourFaqOrderByWithRelationInput = {
    id?: SortOrder
    tourId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    order?: SortOrder
    tour?: TourOrderByWithRelationInput
  }

  export type TourFaqWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TourFaqWhereInput | TourFaqWhereInput[]
    OR?: TourFaqWhereInput[]
    NOT?: TourFaqWhereInput | TourFaqWhereInput[]
    tourId?: StringFilter<"TourFaq"> | string
    question?: StringFilter<"TourFaq"> | string
    answer?: StringFilter<"TourFaq"> | string
    order?: IntFilter<"TourFaq"> | number
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }, "id">

  export type TourFaqOrderByWithAggregationInput = {
    id?: SortOrder
    tourId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    order?: SortOrder
    _count?: TourFaqCountOrderByAggregateInput
    _avg?: TourFaqAvgOrderByAggregateInput
    _max?: TourFaqMaxOrderByAggregateInput
    _min?: TourFaqMinOrderByAggregateInput
    _sum?: TourFaqSumOrderByAggregateInput
  }

  export type TourFaqScalarWhereWithAggregatesInput = {
    AND?: TourFaqScalarWhereWithAggregatesInput | TourFaqScalarWhereWithAggregatesInput[]
    OR?: TourFaqScalarWhereWithAggregatesInput[]
    NOT?: TourFaqScalarWhereWithAggregatesInput | TourFaqScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TourFaq"> | string
    tourId?: StringWithAggregatesFilter<"TourFaq"> | string
    question?: StringWithAggregatesFilter<"TourFaq"> | string
    answer?: StringWithAggregatesFilter<"TourFaq"> | string
    order?: IntWithAggregatesFilter<"TourFaq"> | number
  }

  export type TourGalleryImageWhereInput = {
    AND?: TourGalleryImageWhereInput | TourGalleryImageWhereInput[]
    OR?: TourGalleryImageWhereInput[]
    NOT?: TourGalleryImageWhereInput | TourGalleryImageWhereInput[]
    id?: StringFilter<"TourGalleryImage"> | string
    tourId?: StringFilter<"TourGalleryImage"> | string
    imageUrl?: StringFilter<"TourGalleryImage"> | string
    order?: IntFilter<"TourGalleryImage"> | number
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }

  export type TourGalleryImageOrderByWithRelationInput = {
    id?: SortOrder
    tourId?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    tour?: TourOrderByWithRelationInput
  }

  export type TourGalleryImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TourGalleryImageWhereInput | TourGalleryImageWhereInput[]
    OR?: TourGalleryImageWhereInput[]
    NOT?: TourGalleryImageWhereInput | TourGalleryImageWhereInput[]
    tourId?: StringFilter<"TourGalleryImage"> | string
    imageUrl?: StringFilter<"TourGalleryImage"> | string
    order?: IntFilter<"TourGalleryImage"> | number
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }, "id">

  export type TourGalleryImageOrderByWithAggregationInput = {
    id?: SortOrder
    tourId?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    _count?: TourGalleryImageCountOrderByAggregateInput
    _avg?: TourGalleryImageAvgOrderByAggregateInput
    _max?: TourGalleryImageMaxOrderByAggregateInput
    _min?: TourGalleryImageMinOrderByAggregateInput
    _sum?: TourGalleryImageSumOrderByAggregateInput
  }

  export type TourGalleryImageScalarWhereWithAggregatesInput = {
    AND?: TourGalleryImageScalarWhereWithAggregatesInput | TourGalleryImageScalarWhereWithAggregatesInput[]
    OR?: TourGalleryImageScalarWhereWithAggregatesInput[]
    NOT?: TourGalleryImageScalarWhereWithAggregatesInput | TourGalleryImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TourGalleryImage"> | string
    tourId?: StringWithAggregatesFilter<"TourGalleryImage"> | string
    imageUrl?: StringWithAggregatesFilter<"TourGalleryImage"> | string
    order?: IntWithAggregatesFilter<"TourGalleryImage"> | number
  }

  export type PostCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    username?: string | null
    passwordHash?: string | null
    role?: $Enums.AdminRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    cmsSections?: CmsSectionCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    username?: string | null
    passwordHash?: string | null
    role?: $Enums.AdminRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    cmsSections?: CmsSectionUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    cmsSections?: CmsSectionUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    cmsSections?: CmsSectionUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    username?: string | null
    passwordHash?: string | null
    role?: $Enums.AdminRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryCreateInput = {
    id?: string
    fullName: string
    phone: string
    plannedMonth: string
    consentAccepted: boolean
    createdAt?: Date | string
  }

  export type InquiryUncheckedCreateInput = {
    id?: string
    fullName: string
    phone: string
    plannedMonth: string
    consentAccepted: boolean
    createdAt?: Date | string
  }

  export type InquiryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    plannedMonth?: StringFieldUpdateOperationsInput | string
    consentAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    plannedMonth?: StringFieldUpdateOperationsInput | string
    consentAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryCreateManyInput = {
    id?: string
    fullName: string
    phone: string
    plannedMonth: string
    consentAccepted: boolean
    createdAt?: Date | string
  }

  export type InquiryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    plannedMonth?: StringFieldUpdateOperationsInput | string
    consentAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    plannedMonth?: StringFieldUpdateOperationsInput | string
    consentAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsSectionCreateInput = {
    id?: string
    key: string
    data: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    updatedBy?: UserCreateNestedOneWithoutCmsSectionsInput
  }

  export type CmsSectionUncheckedCreateInput = {
    id?: string
    key: string
    data: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    updatedById?: string | null
  }

  export type CmsSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: UserUpdateOneWithoutCmsSectionsNestedInput
  }

  export type CmsSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CmsSectionCreateManyInput = {
    id?: string
    key: string
    data: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    updatedById?: string | null
  }

  export type CmsSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TourCreateInput = {
    id?: string
    slug: string
    title: string
    category: $Enums.TourCategory
    durationDays: number
    priceFrom: number
    currency: $Enums.TourCurrency
    heroImage: string
    shortBlurb: string
    seoTitle: string
    seoDescription: string
    isPublished?: boolean
    isLandingFeatured?: boolean
    landingFeaturedOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: TourBadgeCreateNestedManyWithoutTourInput
    itinerarySteps?: TourItineraryStepCreateNestedManyWithoutTourInput
    includes?: TourIncludeCreateNestedManyWithoutTourInput
    excludes?: TourExcludeCreateNestedManyWithoutTourInput
    faqs?: TourFaqCreateNestedManyWithoutTourInput
    galleryImages?: TourGalleryImageCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    category: $Enums.TourCategory
    durationDays: number
    priceFrom: number
    currency: $Enums.TourCurrency
    heroImage: string
    shortBlurb: string
    seoTitle: string
    seoDescription: string
    isPublished?: boolean
    isLandingFeatured?: boolean
    landingFeaturedOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: TourBadgeUncheckedCreateNestedManyWithoutTourInput
    itinerarySteps?: TourItineraryStepUncheckedCreateNestedManyWithoutTourInput
    includes?: TourIncludeUncheckedCreateNestedManyWithoutTourInput
    excludes?: TourExcludeUncheckedCreateNestedManyWithoutTourInput
    faqs?: TourFaqUncheckedCreateNestedManyWithoutTourInput
    galleryImages?: TourGalleryImageUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTourCategoryFieldUpdateOperationsInput | $Enums.TourCategory
    durationDays?: IntFieldUpdateOperationsInput | number
    priceFrom?: IntFieldUpdateOperationsInput | number
    currency?: EnumTourCurrencyFieldUpdateOperationsInput | $Enums.TourCurrency
    heroImage?: StringFieldUpdateOperationsInput | string
    shortBlurb?: StringFieldUpdateOperationsInput | string
    seoTitle?: StringFieldUpdateOperationsInput | string
    seoDescription?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isLandingFeatured?: BoolFieldUpdateOperationsInput | boolean
    landingFeaturedOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: TourBadgeUpdateManyWithoutTourNestedInput
    itinerarySteps?: TourItineraryStepUpdateManyWithoutTourNestedInput
    includes?: TourIncludeUpdateManyWithoutTourNestedInput
    excludes?: TourExcludeUpdateManyWithoutTourNestedInput
    faqs?: TourFaqUpdateManyWithoutTourNestedInput
    galleryImages?: TourGalleryImageUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTourCategoryFieldUpdateOperationsInput | $Enums.TourCategory
    durationDays?: IntFieldUpdateOperationsInput | number
    priceFrom?: IntFieldUpdateOperationsInput | number
    currency?: EnumTourCurrencyFieldUpdateOperationsInput | $Enums.TourCurrency
    heroImage?: StringFieldUpdateOperationsInput | string
    shortBlurb?: StringFieldUpdateOperationsInput | string
    seoTitle?: StringFieldUpdateOperationsInput | string
    seoDescription?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isLandingFeatured?: BoolFieldUpdateOperationsInput | boolean
    landingFeaturedOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: TourBadgeUncheckedUpdateManyWithoutTourNestedInput
    itinerarySteps?: TourItineraryStepUncheckedUpdateManyWithoutTourNestedInput
    includes?: TourIncludeUncheckedUpdateManyWithoutTourNestedInput
    excludes?: TourExcludeUncheckedUpdateManyWithoutTourNestedInput
    faqs?: TourFaqUncheckedUpdateManyWithoutTourNestedInput
    galleryImages?: TourGalleryImageUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourCreateManyInput = {
    id?: string
    slug: string
    title: string
    category: $Enums.TourCategory
    durationDays: number
    priceFrom: number
    currency: $Enums.TourCurrency
    heroImage: string
    shortBlurb: string
    seoTitle: string
    seoDescription: string
    isPublished?: boolean
    isLandingFeatured?: boolean
    landingFeaturedOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TourUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTourCategoryFieldUpdateOperationsInput | $Enums.TourCategory
    durationDays?: IntFieldUpdateOperationsInput | number
    priceFrom?: IntFieldUpdateOperationsInput | number
    currency?: EnumTourCurrencyFieldUpdateOperationsInput | $Enums.TourCurrency
    heroImage?: StringFieldUpdateOperationsInput | string
    shortBlurb?: StringFieldUpdateOperationsInput | string
    seoTitle?: StringFieldUpdateOperationsInput | string
    seoDescription?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isLandingFeatured?: BoolFieldUpdateOperationsInput | boolean
    landingFeaturedOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTourCategoryFieldUpdateOperationsInput | $Enums.TourCategory
    durationDays?: IntFieldUpdateOperationsInput | number
    priceFrom?: IntFieldUpdateOperationsInput | number
    currency?: EnumTourCurrencyFieldUpdateOperationsInput | $Enums.TourCurrency
    heroImage?: StringFieldUpdateOperationsInput | string
    shortBlurb?: StringFieldUpdateOperationsInput | string
    seoTitle?: StringFieldUpdateOperationsInput | string
    seoDescription?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isLandingFeatured?: BoolFieldUpdateOperationsInput | boolean
    landingFeaturedOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourBadgeCreateInput = {
    id?: string
    label: string
    order: number
    tour: TourCreateNestedOneWithoutBadgesInput
  }

  export type TourBadgeUncheckedCreateInput = {
    id?: string
    tourId: string
    label: string
    order: number
  }

  export type TourBadgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    tour?: TourUpdateOneRequiredWithoutBadgesNestedInput
  }

  export type TourBadgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tourId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourBadgeCreateManyInput = {
    id?: string
    tourId: string
    label: string
    order: number
  }

  export type TourBadgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourBadgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tourId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourItineraryStepCreateInput = {
    id?: string
    day: string
    title: string
    description: string
    order: number
    tour: TourCreateNestedOneWithoutItineraryStepsInput
  }

  export type TourItineraryStepUncheckedCreateInput = {
    id?: string
    tourId: string
    day: string
    title: string
    description: string
    order: number
  }

  export type TourItineraryStepUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    tour?: TourUpdateOneRequiredWithoutItineraryStepsNestedInput
  }

  export type TourItineraryStepUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tourId?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourItineraryStepCreateManyInput = {
    id?: string
    tourId: string
    day: string
    title: string
    description: string
    order: number
  }

  export type TourItineraryStepUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourItineraryStepUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tourId?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourIncludeCreateInput = {
    id?: string
    item: string
    order: number
    tour: TourCreateNestedOneWithoutIncludesInput
  }

  export type TourIncludeUncheckedCreateInput = {
    id?: string
    tourId: string
    item: string
    order: number
  }

  export type TourIncludeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    tour?: TourUpdateOneRequiredWithoutIncludesNestedInput
  }

  export type TourIncludeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tourId?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourIncludeCreateManyInput = {
    id?: string
    tourId: string
    item: string
    order: number
  }

  export type TourIncludeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourIncludeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tourId?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourExcludeCreateInput = {
    id?: string
    item: string
    order: number
    tour: TourCreateNestedOneWithoutExcludesInput
  }

  export type TourExcludeUncheckedCreateInput = {
    id?: string
    tourId: string
    item: string
    order: number
  }

  export type TourExcludeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    tour?: TourUpdateOneRequiredWithoutExcludesNestedInput
  }

  export type TourExcludeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tourId?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourExcludeCreateManyInput = {
    id?: string
    tourId: string
    item: string
    order: number
  }

  export type TourExcludeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourExcludeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tourId?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourFaqCreateInput = {
    id?: string
    question: string
    answer: string
    order: number
    tour: TourCreateNestedOneWithoutFaqsInput
  }

  export type TourFaqUncheckedCreateInput = {
    id?: string
    tourId: string
    question: string
    answer: string
    order: number
  }

  export type TourFaqUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    tour?: TourUpdateOneRequiredWithoutFaqsNestedInput
  }

  export type TourFaqUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tourId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourFaqCreateManyInput = {
    id?: string
    tourId: string
    question: string
    answer: string
    order: number
  }

  export type TourFaqUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourFaqUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tourId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourGalleryImageCreateInput = {
    id?: string
    imageUrl: string
    order: number
    tour: TourCreateNestedOneWithoutGalleryImagesInput
  }

  export type TourGalleryImageUncheckedCreateInput = {
    id?: string
    tourId: string
    imageUrl: string
    order: number
  }

  export type TourGalleryImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    tour?: TourUpdateOneRequiredWithoutGalleryImagesNestedInput
  }

  export type TourGalleryImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tourId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourGalleryImageCreateManyInput = {
    id?: string
    tourId: string
    imageUrl: string
    order: number
  }

  export type TourGalleryImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourGalleryImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tourId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type EnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type CmsSectionListRelationFilter = {
    every?: CmsSectionWhereInput
    some?: CmsSectionWhereInput
    none?: CmsSectionWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CmsSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type EnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type InquiryCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    plannedMonth?: SortOrder
    consentAccepted?: SortOrder
    createdAt?: SortOrder
  }

  export type InquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    plannedMonth?: SortOrder
    consentAccepted?: SortOrder
    createdAt?: SortOrder
  }

  export type InquiryMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    plannedMonth?: SortOrder
    consentAccepted?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CmsSectionCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    data?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrder
  }

  export type CmsSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrder
  }

  export type CmsSectionMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    updatedAt?: SortOrder
    updatedById?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumTourCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TourCategory | EnumTourCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TourCategory[] | ListEnumTourCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TourCategory[] | ListEnumTourCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTourCategoryFilter<$PrismaModel> | $Enums.TourCategory
  }

  export type EnumTourCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.TourCurrency | EnumTourCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.TourCurrency[] | ListEnumTourCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.TourCurrency[] | ListEnumTourCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumTourCurrencyFilter<$PrismaModel> | $Enums.TourCurrency
  }

  export type TourBadgeListRelationFilter = {
    every?: TourBadgeWhereInput
    some?: TourBadgeWhereInput
    none?: TourBadgeWhereInput
  }

  export type TourItineraryStepListRelationFilter = {
    every?: TourItineraryStepWhereInput
    some?: TourItineraryStepWhereInput
    none?: TourItineraryStepWhereInput
  }

  export type TourIncludeListRelationFilter = {
    every?: TourIncludeWhereInput
    some?: TourIncludeWhereInput
    none?: TourIncludeWhereInput
  }

  export type TourExcludeListRelationFilter = {
    every?: TourExcludeWhereInput
    some?: TourExcludeWhereInput
    none?: TourExcludeWhereInput
  }

  export type TourFaqListRelationFilter = {
    every?: TourFaqWhereInput
    some?: TourFaqWhereInput
    none?: TourFaqWhereInput
  }

  export type TourGalleryImageListRelationFilter = {
    every?: TourGalleryImageWhereInput
    some?: TourGalleryImageWhereInput
    none?: TourGalleryImageWhereInput
  }

  export type TourBadgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourItineraryStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourIncludeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourExcludeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourFaqOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourGalleryImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    category?: SortOrder
    durationDays?: SortOrder
    priceFrom?: SortOrder
    currency?: SortOrder
    heroImage?: SortOrder
    shortBlurb?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    isPublished?: SortOrder
    isLandingFeatured?: SortOrder
    landingFeaturedOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourAvgOrderByAggregateInput = {
    durationDays?: SortOrder
    priceFrom?: SortOrder
    landingFeaturedOrder?: SortOrder
  }

  export type TourMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    category?: SortOrder
    durationDays?: SortOrder
    priceFrom?: SortOrder
    currency?: SortOrder
    heroImage?: SortOrder
    shortBlurb?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    isPublished?: SortOrder
    isLandingFeatured?: SortOrder
    landingFeaturedOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    category?: SortOrder
    durationDays?: SortOrder
    priceFrom?: SortOrder
    currency?: SortOrder
    heroImage?: SortOrder
    shortBlurb?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    isPublished?: SortOrder
    isLandingFeatured?: SortOrder
    landingFeaturedOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourSumOrderByAggregateInput = {
    durationDays?: SortOrder
    priceFrom?: SortOrder
    landingFeaturedOrder?: SortOrder
  }

  export type EnumTourCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TourCategory | EnumTourCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TourCategory[] | ListEnumTourCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TourCategory[] | ListEnumTourCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTourCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TourCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTourCategoryFilter<$PrismaModel>
    _max?: NestedEnumTourCategoryFilter<$PrismaModel>
  }

  export type EnumTourCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TourCurrency | EnumTourCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.TourCurrency[] | ListEnumTourCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.TourCurrency[] | ListEnumTourCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumTourCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.TourCurrency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTourCurrencyFilter<$PrismaModel>
    _max?: NestedEnumTourCurrencyFilter<$PrismaModel>
  }

  export type TourScalarRelationFilter = {
    is?: TourWhereInput
    isNot?: TourWhereInput
  }

  export type TourBadgeCountOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    label?: SortOrder
    order?: SortOrder
  }

  export type TourBadgeAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TourBadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    label?: SortOrder
    order?: SortOrder
  }

  export type TourBadgeMinOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    label?: SortOrder
    order?: SortOrder
  }

  export type TourBadgeSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TourItineraryStepCountOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    day?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
  }

  export type TourItineraryStepAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TourItineraryStepMaxOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    day?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
  }

  export type TourItineraryStepMinOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    day?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
  }

  export type TourItineraryStepSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TourIncludeCountOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    item?: SortOrder
    order?: SortOrder
  }

  export type TourIncludeAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TourIncludeMaxOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    item?: SortOrder
    order?: SortOrder
  }

  export type TourIncludeMinOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    item?: SortOrder
    order?: SortOrder
  }

  export type TourIncludeSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TourExcludeCountOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    item?: SortOrder
    order?: SortOrder
  }

  export type TourExcludeAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TourExcludeMaxOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    item?: SortOrder
    order?: SortOrder
  }

  export type TourExcludeMinOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    item?: SortOrder
    order?: SortOrder
  }

  export type TourExcludeSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TourFaqCountOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    order?: SortOrder
  }

  export type TourFaqAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TourFaqMaxOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    order?: SortOrder
  }

  export type TourFaqMinOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    order?: SortOrder
  }

  export type TourFaqSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TourGalleryImageCountOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
  }

  export type TourGalleryImageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TourGalleryImageMaxOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
  }

  export type TourGalleryImageMinOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
  }

  export type TourGalleryImageSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CmsSectionCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CmsSectionCreateWithoutUpdatedByInput, CmsSectionUncheckedCreateWithoutUpdatedByInput> | CmsSectionCreateWithoutUpdatedByInput[] | CmsSectionUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsSectionCreateOrConnectWithoutUpdatedByInput | CmsSectionCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CmsSectionCreateManyUpdatedByInputEnvelope
    connect?: CmsSectionWhereUniqueInput | CmsSectionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CmsSectionUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CmsSectionCreateWithoutUpdatedByInput, CmsSectionUncheckedCreateWithoutUpdatedByInput> | CmsSectionCreateWithoutUpdatedByInput[] | CmsSectionUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsSectionCreateOrConnectWithoutUpdatedByInput | CmsSectionCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CmsSectionCreateManyUpdatedByInputEnvelope
    connect?: CmsSectionWhereUniqueInput | CmsSectionWhereUniqueInput[]
  }

  export type EnumAdminRoleFieldUpdateOperationsInput = {
    set?: $Enums.AdminRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CmsSectionUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CmsSectionCreateWithoutUpdatedByInput, CmsSectionUncheckedCreateWithoutUpdatedByInput> | CmsSectionCreateWithoutUpdatedByInput[] | CmsSectionUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsSectionCreateOrConnectWithoutUpdatedByInput | CmsSectionCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CmsSectionUpsertWithWhereUniqueWithoutUpdatedByInput | CmsSectionUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CmsSectionCreateManyUpdatedByInputEnvelope
    set?: CmsSectionWhereUniqueInput | CmsSectionWhereUniqueInput[]
    disconnect?: CmsSectionWhereUniqueInput | CmsSectionWhereUniqueInput[]
    delete?: CmsSectionWhereUniqueInput | CmsSectionWhereUniqueInput[]
    connect?: CmsSectionWhereUniqueInput | CmsSectionWhereUniqueInput[]
    update?: CmsSectionUpdateWithWhereUniqueWithoutUpdatedByInput | CmsSectionUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CmsSectionUpdateManyWithWhereWithoutUpdatedByInput | CmsSectionUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CmsSectionScalarWhereInput | CmsSectionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CmsSectionUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CmsSectionCreateWithoutUpdatedByInput, CmsSectionUncheckedCreateWithoutUpdatedByInput> | CmsSectionCreateWithoutUpdatedByInput[] | CmsSectionUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsSectionCreateOrConnectWithoutUpdatedByInput | CmsSectionCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CmsSectionUpsertWithWhereUniqueWithoutUpdatedByInput | CmsSectionUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CmsSectionCreateManyUpdatedByInputEnvelope
    set?: CmsSectionWhereUniqueInput | CmsSectionWhereUniqueInput[]
    disconnect?: CmsSectionWhereUniqueInput | CmsSectionWhereUniqueInput[]
    delete?: CmsSectionWhereUniqueInput | CmsSectionWhereUniqueInput[]
    connect?: CmsSectionWhereUniqueInput | CmsSectionWhereUniqueInput[]
    update?: CmsSectionUpdateWithWhereUniqueWithoutUpdatedByInput | CmsSectionUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CmsSectionUpdateManyWithWhereWithoutUpdatedByInput | CmsSectionUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CmsSectionScalarWhereInput | CmsSectionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCmsSectionsInput = {
    create?: XOR<UserCreateWithoutCmsSectionsInput, UserUncheckedCreateWithoutCmsSectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCmsSectionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutCmsSectionsNestedInput = {
    create?: XOR<UserCreateWithoutCmsSectionsInput, UserUncheckedCreateWithoutCmsSectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCmsSectionsInput
    upsert?: UserUpsertWithoutCmsSectionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCmsSectionsInput, UserUpdateWithoutCmsSectionsInput>, UserUncheckedUpdateWithoutCmsSectionsInput>
  }

  export type TourBadgeCreateNestedManyWithoutTourInput = {
    create?: XOR<TourBadgeCreateWithoutTourInput, TourBadgeUncheckedCreateWithoutTourInput> | TourBadgeCreateWithoutTourInput[] | TourBadgeUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourBadgeCreateOrConnectWithoutTourInput | TourBadgeCreateOrConnectWithoutTourInput[]
    createMany?: TourBadgeCreateManyTourInputEnvelope
    connect?: TourBadgeWhereUniqueInput | TourBadgeWhereUniqueInput[]
  }

  export type TourItineraryStepCreateNestedManyWithoutTourInput = {
    create?: XOR<TourItineraryStepCreateWithoutTourInput, TourItineraryStepUncheckedCreateWithoutTourInput> | TourItineraryStepCreateWithoutTourInput[] | TourItineraryStepUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourItineraryStepCreateOrConnectWithoutTourInput | TourItineraryStepCreateOrConnectWithoutTourInput[]
    createMany?: TourItineraryStepCreateManyTourInputEnvelope
    connect?: TourItineraryStepWhereUniqueInput | TourItineraryStepWhereUniqueInput[]
  }

  export type TourIncludeCreateNestedManyWithoutTourInput = {
    create?: XOR<TourIncludeCreateWithoutTourInput, TourIncludeUncheckedCreateWithoutTourInput> | TourIncludeCreateWithoutTourInput[] | TourIncludeUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourIncludeCreateOrConnectWithoutTourInput | TourIncludeCreateOrConnectWithoutTourInput[]
    createMany?: TourIncludeCreateManyTourInputEnvelope
    connect?: TourIncludeWhereUniqueInput | TourIncludeWhereUniqueInput[]
  }

  export type TourExcludeCreateNestedManyWithoutTourInput = {
    create?: XOR<TourExcludeCreateWithoutTourInput, TourExcludeUncheckedCreateWithoutTourInput> | TourExcludeCreateWithoutTourInput[] | TourExcludeUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourExcludeCreateOrConnectWithoutTourInput | TourExcludeCreateOrConnectWithoutTourInput[]
    createMany?: TourExcludeCreateManyTourInputEnvelope
    connect?: TourExcludeWhereUniqueInput | TourExcludeWhereUniqueInput[]
  }

  export type TourFaqCreateNestedManyWithoutTourInput = {
    create?: XOR<TourFaqCreateWithoutTourInput, TourFaqUncheckedCreateWithoutTourInput> | TourFaqCreateWithoutTourInput[] | TourFaqUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourFaqCreateOrConnectWithoutTourInput | TourFaqCreateOrConnectWithoutTourInput[]
    createMany?: TourFaqCreateManyTourInputEnvelope
    connect?: TourFaqWhereUniqueInput | TourFaqWhereUniqueInput[]
  }

  export type TourGalleryImageCreateNestedManyWithoutTourInput = {
    create?: XOR<TourGalleryImageCreateWithoutTourInput, TourGalleryImageUncheckedCreateWithoutTourInput> | TourGalleryImageCreateWithoutTourInput[] | TourGalleryImageUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourGalleryImageCreateOrConnectWithoutTourInput | TourGalleryImageCreateOrConnectWithoutTourInput[]
    createMany?: TourGalleryImageCreateManyTourInputEnvelope
    connect?: TourGalleryImageWhereUniqueInput | TourGalleryImageWhereUniqueInput[]
  }

  export type TourBadgeUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<TourBadgeCreateWithoutTourInput, TourBadgeUncheckedCreateWithoutTourInput> | TourBadgeCreateWithoutTourInput[] | TourBadgeUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourBadgeCreateOrConnectWithoutTourInput | TourBadgeCreateOrConnectWithoutTourInput[]
    createMany?: TourBadgeCreateManyTourInputEnvelope
    connect?: TourBadgeWhereUniqueInput | TourBadgeWhereUniqueInput[]
  }

  export type TourItineraryStepUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<TourItineraryStepCreateWithoutTourInput, TourItineraryStepUncheckedCreateWithoutTourInput> | TourItineraryStepCreateWithoutTourInput[] | TourItineraryStepUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourItineraryStepCreateOrConnectWithoutTourInput | TourItineraryStepCreateOrConnectWithoutTourInput[]
    createMany?: TourItineraryStepCreateManyTourInputEnvelope
    connect?: TourItineraryStepWhereUniqueInput | TourItineraryStepWhereUniqueInput[]
  }

  export type TourIncludeUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<TourIncludeCreateWithoutTourInput, TourIncludeUncheckedCreateWithoutTourInput> | TourIncludeCreateWithoutTourInput[] | TourIncludeUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourIncludeCreateOrConnectWithoutTourInput | TourIncludeCreateOrConnectWithoutTourInput[]
    createMany?: TourIncludeCreateManyTourInputEnvelope
    connect?: TourIncludeWhereUniqueInput | TourIncludeWhereUniqueInput[]
  }

  export type TourExcludeUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<TourExcludeCreateWithoutTourInput, TourExcludeUncheckedCreateWithoutTourInput> | TourExcludeCreateWithoutTourInput[] | TourExcludeUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourExcludeCreateOrConnectWithoutTourInput | TourExcludeCreateOrConnectWithoutTourInput[]
    createMany?: TourExcludeCreateManyTourInputEnvelope
    connect?: TourExcludeWhereUniqueInput | TourExcludeWhereUniqueInput[]
  }

  export type TourFaqUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<TourFaqCreateWithoutTourInput, TourFaqUncheckedCreateWithoutTourInput> | TourFaqCreateWithoutTourInput[] | TourFaqUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourFaqCreateOrConnectWithoutTourInput | TourFaqCreateOrConnectWithoutTourInput[]
    createMany?: TourFaqCreateManyTourInputEnvelope
    connect?: TourFaqWhereUniqueInput | TourFaqWhereUniqueInput[]
  }

  export type TourGalleryImageUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<TourGalleryImageCreateWithoutTourInput, TourGalleryImageUncheckedCreateWithoutTourInput> | TourGalleryImageCreateWithoutTourInput[] | TourGalleryImageUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourGalleryImageCreateOrConnectWithoutTourInput | TourGalleryImageCreateOrConnectWithoutTourInput[]
    createMany?: TourGalleryImageCreateManyTourInputEnvelope
    connect?: TourGalleryImageWhereUniqueInput | TourGalleryImageWhereUniqueInput[]
  }

  export type EnumTourCategoryFieldUpdateOperationsInput = {
    set?: $Enums.TourCategory
  }

  export type EnumTourCurrencyFieldUpdateOperationsInput = {
    set?: $Enums.TourCurrency
  }

  export type TourBadgeUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourBadgeCreateWithoutTourInput, TourBadgeUncheckedCreateWithoutTourInput> | TourBadgeCreateWithoutTourInput[] | TourBadgeUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourBadgeCreateOrConnectWithoutTourInput | TourBadgeCreateOrConnectWithoutTourInput[]
    upsert?: TourBadgeUpsertWithWhereUniqueWithoutTourInput | TourBadgeUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourBadgeCreateManyTourInputEnvelope
    set?: TourBadgeWhereUniqueInput | TourBadgeWhereUniqueInput[]
    disconnect?: TourBadgeWhereUniqueInput | TourBadgeWhereUniqueInput[]
    delete?: TourBadgeWhereUniqueInput | TourBadgeWhereUniqueInput[]
    connect?: TourBadgeWhereUniqueInput | TourBadgeWhereUniqueInput[]
    update?: TourBadgeUpdateWithWhereUniqueWithoutTourInput | TourBadgeUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourBadgeUpdateManyWithWhereWithoutTourInput | TourBadgeUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourBadgeScalarWhereInput | TourBadgeScalarWhereInput[]
  }

  export type TourItineraryStepUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourItineraryStepCreateWithoutTourInput, TourItineraryStepUncheckedCreateWithoutTourInput> | TourItineraryStepCreateWithoutTourInput[] | TourItineraryStepUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourItineraryStepCreateOrConnectWithoutTourInput | TourItineraryStepCreateOrConnectWithoutTourInput[]
    upsert?: TourItineraryStepUpsertWithWhereUniqueWithoutTourInput | TourItineraryStepUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourItineraryStepCreateManyTourInputEnvelope
    set?: TourItineraryStepWhereUniqueInput | TourItineraryStepWhereUniqueInput[]
    disconnect?: TourItineraryStepWhereUniqueInput | TourItineraryStepWhereUniqueInput[]
    delete?: TourItineraryStepWhereUniqueInput | TourItineraryStepWhereUniqueInput[]
    connect?: TourItineraryStepWhereUniqueInput | TourItineraryStepWhereUniqueInput[]
    update?: TourItineraryStepUpdateWithWhereUniqueWithoutTourInput | TourItineraryStepUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourItineraryStepUpdateManyWithWhereWithoutTourInput | TourItineraryStepUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourItineraryStepScalarWhereInput | TourItineraryStepScalarWhereInput[]
  }

  export type TourIncludeUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourIncludeCreateWithoutTourInput, TourIncludeUncheckedCreateWithoutTourInput> | TourIncludeCreateWithoutTourInput[] | TourIncludeUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourIncludeCreateOrConnectWithoutTourInput | TourIncludeCreateOrConnectWithoutTourInput[]
    upsert?: TourIncludeUpsertWithWhereUniqueWithoutTourInput | TourIncludeUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourIncludeCreateManyTourInputEnvelope
    set?: TourIncludeWhereUniqueInput | TourIncludeWhereUniqueInput[]
    disconnect?: TourIncludeWhereUniqueInput | TourIncludeWhereUniqueInput[]
    delete?: TourIncludeWhereUniqueInput | TourIncludeWhereUniqueInput[]
    connect?: TourIncludeWhereUniqueInput | TourIncludeWhereUniqueInput[]
    update?: TourIncludeUpdateWithWhereUniqueWithoutTourInput | TourIncludeUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourIncludeUpdateManyWithWhereWithoutTourInput | TourIncludeUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourIncludeScalarWhereInput | TourIncludeScalarWhereInput[]
  }

  export type TourExcludeUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourExcludeCreateWithoutTourInput, TourExcludeUncheckedCreateWithoutTourInput> | TourExcludeCreateWithoutTourInput[] | TourExcludeUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourExcludeCreateOrConnectWithoutTourInput | TourExcludeCreateOrConnectWithoutTourInput[]
    upsert?: TourExcludeUpsertWithWhereUniqueWithoutTourInput | TourExcludeUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourExcludeCreateManyTourInputEnvelope
    set?: TourExcludeWhereUniqueInput | TourExcludeWhereUniqueInput[]
    disconnect?: TourExcludeWhereUniqueInput | TourExcludeWhereUniqueInput[]
    delete?: TourExcludeWhereUniqueInput | TourExcludeWhereUniqueInput[]
    connect?: TourExcludeWhereUniqueInput | TourExcludeWhereUniqueInput[]
    update?: TourExcludeUpdateWithWhereUniqueWithoutTourInput | TourExcludeUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourExcludeUpdateManyWithWhereWithoutTourInput | TourExcludeUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourExcludeScalarWhereInput | TourExcludeScalarWhereInput[]
  }

  export type TourFaqUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourFaqCreateWithoutTourInput, TourFaqUncheckedCreateWithoutTourInput> | TourFaqCreateWithoutTourInput[] | TourFaqUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourFaqCreateOrConnectWithoutTourInput | TourFaqCreateOrConnectWithoutTourInput[]
    upsert?: TourFaqUpsertWithWhereUniqueWithoutTourInput | TourFaqUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourFaqCreateManyTourInputEnvelope
    set?: TourFaqWhereUniqueInput | TourFaqWhereUniqueInput[]
    disconnect?: TourFaqWhereUniqueInput | TourFaqWhereUniqueInput[]
    delete?: TourFaqWhereUniqueInput | TourFaqWhereUniqueInput[]
    connect?: TourFaqWhereUniqueInput | TourFaqWhereUniqueInput[]
    update?: TourFaqUpdateWithWhereUniqueWithoutTourInput | TourFaqUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourFaqUpdateManyWithWhereWithoutTourInput | TourFaqUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourFaqScalarWhereInput | TourFaqScalarWhereInput[]
  }

  export type TourGalleryImageUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourGalleryImageCreateWithoutTourInput, TourGalleryImageUncheckedCreateWithoutTourInput> | TourGalleryImageCreateWithoutTourInput[] | TourGalleryImageUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourGalleryImageCreateOrConnectWithoutTourInput | TourGalleryImageCreateOrConnectWithoutTourInput[]
    upsert?: TourGalleryImageUpsertWithWhereUniqueWithoutTourInput | TourGalleryImageUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourGalleryImageCreateManyTourInputEnvelope
    set?: TourGalleryImageWhereUniqueInput | TourGalleryImageWhereUniqueInput[]
    disconnect?: TourGalleryImageWhereUniqueInput | TourGalleryImageWhereUniqueInput[]
    delete?: TourGalleryImageWhereUniqueInput | TourGalleryImageWhereUniqueInput[]
    connect?: TourGalleryImageWhereUniqueInput | TourGalleryImageWhereUniqueInput[]
    update?: TourGalleryImageUpdateWithWhereUniqueWithoutTourInput | TourGalleryImageUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourGalleryImageUpdateManyWithWhereWithoutTourInput | TourGalleryImageUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourGalleryImageScalarWhereInput | TourGalleryImageScalarWhereInput[]
  }

  export type TourBadgeUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourBadgeCreateWithoutTourInput, TourBadgeUncheckedCreateWithoutTourInput> | TourBadgeCreateWithoutTourInput[] | TourBadgeUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourBadgeCreateOrConnectWithoutTourInput | TourBadgeCreateOrConnectWithoutTourInput[]
    upsert?: TourBadgeUpsertWithWhereUniqueWithoutTourInput | TourBadgeUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourBadgeCreateManyTourInputEnvelope
    set?: TourBadgeWhereUniqueInput | TourBadgeWhereUniqueInput[]
    disconnect?: TourBadgeWhereUniqueInput | TourBadgeWhereUniqueInput[]
    delete?: TourBadgeWhereUniqueInput | TourBadgeWhereUniqueInput[]
    connect?: TourBadgeWhereUniqueInput | TourBadgeWhereUniqueInput[]
    update?: TourBadgeUpdateWithWhereUniqueWithoutTourInput | TourBadgeUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourBadgeUpdateManyWithWhereWithoutTourInput | TourBadgeUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourBadgeScalarWhereInput | TourBadgeScalarWhereInput[]
  }

  export type TourItineraryStepUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourItineraryStepCreateWithoutTourInput, TourItineraryStepUncheckedCreateWithoutTourInput> | TourItineraryStepCreateWithoutTourInput[] | TourItineraryStepUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourItineraryStepCreateOrConnectWithoutTourInput | TourItineraryStepCreateOrConnectWithoutTourInput[]
    upsert?: TourItineraryStepUpsertWithWhereUniqueWithoutTourInput | TourItineraryStepUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourItineraryStepCreateManyTourInputEnvelope
    set?: TourItineraryStepWhereUniqueInput | TourItineraryStepWhereUniqueInput[]
    disconnect?: TourItineraryStepWhereUniqueInput | TourItineraryStepWhereUniqueInput[]
    delete?: TourItineraryStepWhereUniqueInput | TourItineraryStepWhereUniqueInput[]
    connect?: TourItineraryStepWhereUniqueInput | TourItineraryStepWhereUniqueInput[]
    update?: TourItineraryStepUpdateWithWhereUniqueWithoutTourInput | TourItineraryStepUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourItineraryStepUpdateManyWithWhereWithoutTourInput | TourItineraryStepUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourItineraryStepScalarWhereInput | TourItineraryStepScalarWhereInput[]
  }

  export type TourIncludeUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourIncludeCreateWithoutTourInput, TourIncludeUncheckedCreateWithoutTourInput> | TourIncludeCreateWithoutTourInput[] | TourIncludeUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourIncludeCreateOrConnectWithoutTourInput | TourIncludeCreateOrConnectWithoutTourInput[]
    upsert?: TourIncludeUpsertWithWhereUniqueWithoutTourInput | TourIncludeUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourIncludeCreateManyTourInputEnvelope
    set?: TourIncludeWhereUniqueInput | TourIncludeWhereUniqueInput[]
    disconnect?: TourIncludeWhereUniqueInput | TourIncludeWhereUniqueInput[]
    delete?: TourIncludeWhereUniqueInput | TourIncludeWhereUniqueInput[]
    connect?: TourIncludeWhereUniqueInput | TourIncludeWhereUniqueInput[]
    update?: TourIncludeUpdateWithWhereUniqueWithoutTourInput | TourIncludeUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourIncludeUpdateManyWithWhereWithoutTourInput | TourIncludeUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourIncludeScalarWhereInput | TourIncludeScalarWhereInput[]
  }

  export type TourExcludeUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourExcludeCreateWithoutTourInput, TourExcludeUncheckedCreateWithoutTourInput> | TourExcludeCreateWithoutTourInput[] | TourExcludeUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourExcludeCreateOrConnectWithoutTourInput | TourExcludeCreateOrConnectWithoutTourInput[]
    upsert?: TourExcludeUpsertWithWhereUniqueWithoutTourInput | TourExcludeUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourExcludeCreateManyTourInputEnvelope
    set?: TourExcludeWhereUniqueInput | TourExcludeWhereUniqueInput[]
    disconnect?: TourExcludeWhereUniqueInput | TourExcludeWhereUniqueInput[]
    delete?: TourExcludeWhereUniqueInput | TourExcludeWhereUniqueInput[]
    connect?: TourExcludeWhereUniqueInput | TourExcludeWhereUniqueInput[]
    update?: TourExcludeUpdateWithWhereUniqueWithoutTourInput | TourExcludeUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourExcludeUpdateManyWithWhereWithoutTourInput | TourExcludeUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourExcludeScalarWhereInput | TourExcludeScalarWhereInput[]
  }

  export type TourFaqUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourFaqCreateWithoutTourInput, TourFaqUncheckedCreateWithoutTourInput> | TourFaqCreateWithoutTourInput[] | TourFaqUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourFaqCreateOrConnectWithoutTourInput | TourFaqCreateOrConnectWithoutTourInput[]
    upsert?: TourFaqUpsertWithWhereUniqueWithoutTourInput | TourFaqUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourFaqCreateManyTourInputEnvelope
    set?: TourFaqWhereUniqueInput | TourFaqWhereUniqueInput[]
    disconnect?: TourFaqWhereUniqueInput | TourFaqWhereUniqueInput[]
    delete?: TourFaqWhereUniqueInput | TourFaqWhereUniqueInput[]
    connect?: TourFaqWhereUniqueInput | TourFaqWhereUniqueInput[]
    update?: TourFaqUpdateWithWhereUniqueWithoutTourInput | TourFaqUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourFaqUpdateManyWithWhereWithoutTourInput | TourFaqUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourFaqScalarWhereInput | TourFaqScalarWhereInput[]
  }

  export type TourGalleryImageUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourGalleryImageCreateWithoutTourInput, TourGalleryImageUncheckedCreateWithoutTourInput> | TourGalleryImageCreateWithoutTourInput[] | TourGalleryImageUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourGalleryImageCreateOrConnectWithoutTourInput | TourGalleryImageCreateOrConnectWithoutTourInput[]
    upsert?: TourGalleryImageUpsertWithWhereUniqueWithoutTourInput | TourGalleryImageUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourGalleryImageCreateManyTourInputEnvelope
    set?: TourGalleryImageWhereUniqueInput | TourGalleryImageWhereUniqueInput[]
    disconnect?: TourGalleryImageWhereUniqueInput | TourGalleryImageWhereUniqueInput[]
    delete?: TourGalleryImageWhereUniqueInput | TourGalleryImageWhereUniqueInput[]
    connect?: TourGalleryImageWhereUniqueInput | TourGalleryImageWhereUniqueInput[]
    update?: TourGalleryImageUpdateWithWhereUniqueWithoutTourInput | TourGalleryImageUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourGalleryImageUpdateManyWithWhereWithoutTourInput | TourGalleryImageUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourGalleryImageScalarWhereInput | TourGalleryImageScalarWhereInput[]
  }

  export type TourCreateNestedOneWithoutBadgesInput = {
    create?: XOR<TourCreateWithoutBadgesInput, TourUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: TourCreateOrConnectWithoutBadgesInput
    connect?: TourWhereUniqueInput
  }

  export type TourUpdateOneRequiredWithoutBadgesNestedInput = {
    create?: XOR<TourCreateWithoutBadgesInput, TourUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: TourCreateOrConnectWithoutBadgesInput
    upsert?: TourUpsertWithoutBadgesInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutBadgesInput, TourUpdateWithoutBadgesInput>, TourUncheckedUpdateWithoutBadgesInput>
  }

  export type TourCreateNestedOneWithoutItineraryStepsInput = {
    create?: XOR<TourCreateWithoutItineraryStepsInput, TourUncheckedCreateWithoutItineraryStepsInput>
    connectOrCreate?: TourCreateOrConnectWithoutItineraryStepsInput
    connect?: TourWhereUniqueInput
  }

  export type TourUpdateOneRequiredWithoutItineraryStepsNestedInput = {
    create?: XOR<TourCreateWithoutItineraryStepsInput, TourUncheckedCreateWithoutItineraryStepsInput>
    connectOrCreate?: TourCreateOrConnectWithoutItineraryStepsInput
    upsert?: TourUpsertWithoutItineraryStepsInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutItineraryStepsInput, TourUpdateWithoutItineraryStepsInput>, TourUncheckedUpdateWithoutItineraryStepsInput>
  }

  export type TourCreateNestedOneWithoutIncludesInput = {
    create?: XOR<TourCreateWithoutIncludesInput, TourUncheckedCreateWithoutIncludesInput>
    connectOrCreate?: TourCreateOrConnectWithoutIncludesInput
    connect?: TourWhereUniqueInput
  }

  export type TourUpdateOneRequiredWithoutIncludesNestedInput = {
    create?: XOR<TourCreateWithoutIncludesInput, TourUncheckedCreateWithoutIncludesInput>
    connectOrCreate?: TourCreateOrConnectWithoutIncludesInput
    upsert?: TourUpsertWithoutIncludesInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutIncludesInput, TourUpdateWithoutIncludesInput>, TourUncheckedUpdateWithoutIncludesInput>
  }

  export type TourCreateNestedOneWithoutExcludesInput = {
    create?: XOR<TourCreateWithoutExcludesInput, TourUncheckedCreateWithoutExcludesInput>
    connectOrCreate?: TourCreateOrConnectWithoutExcludesInput
    connect?: TourWhereUniqueInput
  }

  export type TourUpdateOneRequiredWithoutExcludesNestedInput = {
    create?: XOR<TourCreateWithoutExcludesInput, TourUncheckedCreateWithoutExcludesInput>
    connectOrCreate?: TourCreateOrConnectWithoutExcludesInput
    upsert?: TourUpsertWithoutExcludesInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutExcludesInput, TourUpdateWithoutExcludesInput>, TourUncheckedUpdateWithoutExcludesInput>
  }

  export type TourCreateNestedOneWithoutFaqsInput = {
    create?: XOR<TourCreateWithoutFaqsInput, TourUncheckedCreateWithoutFaqsInput>
    connectOrCreate?: TourCreateOrConnectWithoutFaqsInput
    connect?: TourWhereUniqueInput
  }

  export type TourUpdateOneRequiredWithoutFaqsNestedInput = {
    create?: XOR<TourCreateWithoutFaqsInput, TourUncheckedCreateWithoutFaqsInput>
    connectOrCreate?: TourCreateOrConnectWithoutFaqsInput
    upsert?: TourUpsertWithoutFaqsInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutFaqsInput, TourUpdateWithoutFaqsInput>, TourUncheckedUpdateWithoutFaqsInput>
  }

  export type TourCreateNestedOneWithoutGalleryImagesInput = {
    create?: XOR<TourCreateWithoutGalleryImagesInput, TourUncheckedCreateWithoutGalleryImagesInput>
    connectOrCreate?: TourCreateOrConnectWithoutGalleryImagesInput
    connect?: TourWhereUniqueInput
  }

  export type TourUpdateOneRequiredWithoutGalleryImagesNestedInput = {
    create?: XOR<TourCreateWithoutGalleryImagesInput, TourUncheckedCreateWithoutGalleryImagesInput>
    connectOrCreate?: TourCreateOrConnectWithoutGalleryImagesInput
    upsert?: TourUpsertWithoutGalleryImagesInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutGalleryImagesInput, TourUpdateWithoutGalleryImagesInput>, TourUncheckedUpdateWithoutGalleryImagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumTourCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TourCategory | EnumTourCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TourCategory[] | ListEnumTourCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TourCategory[] | ListEnumTourCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTourCategoryFilter<$PrismaModel> | $Enums.TourCategory
  }

  export type NestedEnumTourCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.TourCurrency | EnumTourCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.TourCurrency[] | ListEnumTourCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.TourCurrency[] | ListEnumTourCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumTourCurrencyFilter<$PrismaModel> | $Enums.TourCurrency
  }

  export type NestedEnumTourCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TourCategory | EnumTourCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TourCategory[] | ListEnumTourCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TourCategory[] | ListEnumTourCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTourCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TourCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTourCategoryFilter<$PrismaModel>
    _max?: NestedEnumTourCategoryFilter<$PrismaModel>
  }

  export type NestedEnumTourCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TourCurrency | EnumTourCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.TourCurrency[] | ListEnumTourCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.TourCurrency[] | ListEnumTourCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumTourCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.TourCurrency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTourCurrencyFilter<$PrismaModel>
    _max?: NestedEnumTourCurrencyFilter<$PrismaModel>
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    username?: string | null
    passwordHash?: string | null
    role?: $Enums.AdminRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    cmsSections?: CmsSectionCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    username?: string | null
    passwordHash?: string | null
    role?: $Enums.AdminRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    cmsSections?: CmsSectionUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    cmsSections?: CmsSectionUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    cmsSections?: CmsSectionUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    username?: string | null
    passwordHash?: string | null
    role?: $Enums.AdminRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    cmsSections?: CmsSectionCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    username?: string | null
    passwordHash?: string | null
    role?: $Enums.AdminRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    cmsSections?: CmsSectionUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    cmsSections?: CmsSectionUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    cmsSections?: CmsSectionUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    username?: string | null
    passwordHash?: string | null
    role?: $Enums.AdminRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    cmsSections?: CmsSectionCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    username?: string | null
    passwordHash?: string | null
    role?: $Enums.AdminRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    cmsSections?: CmsSectionUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    cmsSections?: CmsSectionUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    cmsSections?: CmsSectionUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutCreatedByInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostCreateManyCreatedByInputEnvelope = {
    data: PostCreateManyCreatedByInput | PostCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type CmsSectionCreateWithoutUpdatedByInput = {
    id?: string
    key: string
    data: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type CmsSectionUncheckedCreateWithoutUpdatedByInput = {
    id?: string
    key: string
    data: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type CmsSectionCreateOrConnectWithoutUpdatedByInput = {
    where: CmsSectionWhereUniqueInput
    create: XOR<CmsSectionCreateWithoutUpdatedByInput, CmsSectionUncheckedCreateWithoutUpdatedByInput>
  }

  export type CmsSectionCreateManyUpdatedByInputEnvelope = {
    data: CmsSectionCreateManyUpdatedByInput | CmsSectionCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
  }

  export type PostUpdateManyWithWhereWithoutCreatedByInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
  }

  export type CmsSectionUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: CmsSectionWhereUniqueInput
    update: XOR<CmsSectionUpdateWithoutUpdatedByInput, CmsSectionUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<CmsSectionCreateWithoutUpdatedByInput, CmsSectionUncheckedCreateWithoutUpdatedByInput>
  }

  export type CmsSectionUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: CmsSectionWhereUniqueInput
    data: XOR<CmsSectionUpdateWithoutUpdatedByInput, CmsSectionUncheckedUpdateWithoutUpdatedByInput>
  }

  export type CmsSectionUpdateManyWithWhereWithoutUpdatedByInput = {
    where: CmsSectionScalarWhereInput
    data: XOR<CmsSectionUpdateManyMutationInput, CmsSectionUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type CmsSectionScalarWhereInput = {
    AND?: CmsSectionScalarWhereInput | CmsSectionScalarWhereInput[]
    OR?: CmsSectionScalarWhereInput[]
    NOT?: CmsSectionScalarWhereInput | CmsSectionScalarWhereInput[]
    id?: StringFilter<"CmsSection"> | string
    key?: StringFilter<"CmsSection"> | string
    data?: JsonFilter<"CmsSection">
    updatedAt?: DateTimeFilter<"CmsSection"> | Date | string
    updatedById?: StringNullableFilter<"CmsSection"> | string | null
  }

  export type UserCreateWithoutCmsSectionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    username?: string | null
    passwordHash?: string | null
    role?: $Enums.AdminRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCmsSectionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    username?: string | null
    passwordHash?: string | null
    role?: $Enums.AdminRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCmsSectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCmsSectionsInput, UserUncheckedCreateWithoutCmsSectionsInput>
  }

  export type UserUpsertWithoutCmsSectionsInput = {
    update: XOR<UserUpdateWithoutCmsSectionsInput, UserUncheckedUpdateWithoutCmsSectionsInput>
    create: XOR<UserCreateWithoutCmsSectionsInput, UserUncheckedCreateWithoutCmsSectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCmsSectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCmsSectionsInput, UserUncheckedUpdateWithoutCmsSectionsInput>
  }

  export type UserUpdateWithoutCmsSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCmsSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type TourBadgeCreateWithoutTourInput = {
    id?: string
    label: string
    order: number
  }

  export type TourBadgeUncheckedCreateWithoutTourInput = {
    id?: string
    label: string
    order: number
  }

  export type TourBadgeCreateOrConnectWithoutTourInput = {
    where: TourBadgeWhereUniqueInput
    create: XOR<TourBadgeCreateWithoutTourInput, TourBadgeUncheckedCreateWithoutTourInput>
  }

  export type TourBadgeCreateManyTourInputEnvelope = {
    data: TourBadgeCreateManyTourInput | TourBadgeCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type TourItineraryStepCreateWithoutTourInput = {
    id?: string
    day: string
    title: string
    description: string
    order: number
  }

  export type TourItineraryStepUncheckedCreateWithoutTourInput = {
    id?: string
    day: string
    title: string
    description: string
    order: number
  }

  export type TourItineraryStepCreateOrConnectWithoutTourInput = {
    where: TourItineraryStepWhereUniqueInput
    create: XOR<TourItineraryStepCreateWithoutTourInput, TourItineraryStepUncheckedCreateWithoutTourInput>
  }

  export type TourItineraryStepCreateManyTourInputEnvelope = {
    data: TourItineraryStepCreateManyTourInput | TourItineraryStepCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type TourIncludeCreateWithoutTourInput = {
    id?: string
    item: string
    order: number
  }

  export type TourIncludeUncheckedCreateWithoutTourInput = {
    id?: string
    item: string
    order: number
  }

  export type TourIncludeCreateOrConnectWithoutTourInput = {
    where: TourIncludeWhereUniqueInput
    create: XOR<TourIncludeCreateWithoutTourInput, TourIncludeUncheckedCreateWithoutTourInput>
  }

  export type TourIncludeCreateManyTourInputEnvelope = {
    data: TourIncludeCreateManyTourInput | TourIncludeCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type TourExcludeCreateWithoutTourInput = {
    id?: string
    item: string
    order: number
  }

  export type TourExcludeUncheckedCreateWithoutTourInput = {
    id?: string
    item: string
    order: number
  }

  export type TourExcludeCreateOrConnectWithoutTourInput = {
    where: TourExcludeWhereUniqueInput
    create: XOR<TourExcludeCreateWithoutTourInput, TourExcludeUncheckedCreateWithoutTourInput>
  }

  export type TourExcludeCreateManyTourInputEnvelope = {
    data: TourExcludeCreateManyTourInput | TourExcludeCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type TourFaqCreateWithoutTourInput = {
    id?: string
    question: string
    answer: string
    order: number
  }

  export type TourFaqUncheckedCreateWithoutTourInput = {
    id?: string
    question: string
    answer: string
    order: number
  }

  export type TourFaqCreateOrConnectWithoutTourInput = {
    where: TourFaqWhereUniqueInput
    create: XOR<TourFaqCreateWithoutTourInput, TourFaqUncheckedCreateWithoutTourInput>
  }

  export type TourFaqCreateManyTourInputEnvelope = {
    data: TourFaqCreateManyTourInput | TourFaqCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type TourGalleryImageCreateWithoutTourInput = {
    id?: string
    imageUrl: string
    order: number
  }

  export type TourGalleryImageUncheckedCreateWithoutTourInput = {
    id?: string
    imageUrl: string
    order: number
  }

  export type TourGalleryImageCreateOrConnectWithoutTourInput = {
    where: TourGalleryImageWhereUniqueInput
    create: XOR<TourGalleryImageCreateWithoutTourInput, TourGalleryImageUncheckedCreateWithoutTourInput>
  }

  export type TourGalleryImageCreateManyTourInputEnvelope = {
    data: TourGalleryImageCreateManyTourInput | TourGalleryImageCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type TourBadgeUpsertWithWhereUniqueWithoutTourInput = {
    where: TourBadgeWhereUniqueInput
    update: XOR<TourBadgeUpdateWithoutTourInput, TourBadgeUncheckedUpdateWithoutTourInput>
    create: XOR<TourBadgeCreateWithoutTourInput, TourBadgeUncheckedCreateWithoutTourInput>
  }

  export type TourBadgeUpdateWithWhereUniqueWithoutTourInput = {
    where: TourBadgeWhereUniqueInput
    data: XOR<TourBadgeUpdateWithoutTourInput, TourBadgeUncheckedUpdateWithoutTourInput>
  }

  export type TourBadgeUpdateManyWithWhereWithoutTourInput = {
    where: TourBadgeScalarWhereInput
    data: XOR<TourBadgeUpdateManyMutationInput, TourBadgeUncheckedUpdateManyWithoutTourInput>
  }

  export type TourBadgeScalarWhereInput = {
    AND?: TourBadgeScalarWhereInput | TourBadgeScalarWhereInput[]
    OR?: TourBadgeScalarWhereInput[]
    NOT?: TourBadgeScalarWhereInput | TourBadgeScalarWhereInput[]
    id?: StringFilter<"TourBadge"> | string
    tourId?: StringFilter<"TourBadge"> | string
    label?: StringFilter<"TourBadge"> | string
    order?: IntFilter<"TourBadge"> | number
  }

  export type TourItineraryStepUpsertWithWhereUniqueWithoutTourInput = {
    where: TourItineraryStepWhereUniqueInput
    update: XOR<TourItineraryStepUpdateWithoutTourInput, TourItineraryStepUncheckedUpdateWithoutTourInput>
    create: XOR<TourItineraryStepCreateWithoutTourInput, TourItineraryStepUncheckedCreateWithoutTourInput>
  }

  export type TourItineraryStepUpdateWithWhereUniqueWithoutTourInput = {
    where: TourItineraryStepWhereUniqueInput
    data: XOR<TourItineraryStepUpdateWithoutTourInput, TourItineraryStepUncheckedUpdateWithoutTourInput>
  }

  export type TourItineraryStepUpdateManyWithWhereWithoutTourInput = {
    where: TourItineraryStepScalarWhereInput
    data: XOR<TourItineraryStepUpdateManyMutationInput, TourItineraryStepUncheckedUpdateManyWithoutTourInput>
  }

  export type TourItineraryStepScalarWhereInput = {
    AND?: TourItineraryStepScalarWhereInput | TourItineraryStepScalarWhereInput[]
    OR?: TourItineraryStepScalarWhereInput[]
    NOT?: TourItineraryStepScalarWhereInput | TourItineraryStepScalarWhereInput[]
    id?: StringFilter<"TourItineraryStep"> | string
    tourId?: StringFilter<"TourItineraryStep"> | string
    day?: StringFilter<"TourItineraryStep"> | string
    title?: StringFilter<"TourItineraryStep"> | string
    description?: StringFilter<"TourItineraryStep"> | string
    order?: IntFilter<"TourItineraryStep"> | number
  }

  export type TourIncludeUpsertWithWhereUniqueWithoutTourInput = {
    where: TourIncludeWhereUniqueInput
    update: XOR<TourIncludeUpdateWithoutTourInput, TourIncludeUncheckedUpdateWithoutTourInput>
    create: XOR<TourIncludeCreateWithoutTourInput, TourIncludeUncheckedCreateWithoutTourInput>
  }

  export type TourIncludeUpdateWithWhereUniqueWithoutTourInput = {
    where: TourIncludeWhereUniqueInput
    data: XOR<TourIncludeUpdateWithoutTourInput, TourIncludeUncheckedUpdateWithoutTourInput>
  }

  export type TourIncludeUpdateManyWithWhereWithoutTourInput = {
    where: TourIncludeScalarWhereInput
    data: XOR<TourIncludeUpdateManyMutationInput, TourIncludeUncheckedUpdateManyWithoutTourInput>
  }

  export type TourIncludeScalarWhereInput = {
    AND?: TourIncludeScalarWhereInput | TourIncludeScalarWhereInput[]
    OR?: TourIncludeScalarWhereInput[]
    NOT?: TourIncludeScalarWhereInput | TourIncludeScalarWhereInput[]
    id?: StringFilter<"TourInclude"> | string
    tourId?: StringFilter<"TourInclude"> | string
    item?: StringFilter<"TourInclude"> | string
    order?: IntFilter<"TourInclude"> | number
  }

  export type TourExcludeUpsertWithWhereUniqueWithoutTourInput = {
    where: TourExcludeWhereUniqueInput
    update: XOR<TourExcludeUpdateWithoutTourInput, TourExcludeUncheckedUpdateWithoutTourInput>
    create: XOR<TourExcludeCreateWithoutTourInput, TourExcludeUncheckedCreateWithoutTourInput>
  }

  export type TourExcludeUpdateWithWhereUniqueWithoutTourInput = {
    where: TourExcludeWhereUniqueInput
    data: XOR<TourExcludeUpdateWithoutTourInput, TourExcludeUncheckedUpdateWithoutTourInput>
  }

  export type TourExcludeUpdateManyWithWhereWithoutTourInput = {
    where: TourExcludeScalarWhereInput
    data: XOR<TourExcludeUpdateManyMutationInput, TourExcludeUncheckedUpdateManyWithoutTourInput>
  }

  export type TourExcludeScalarWhereInput = {
    AND?: TourExcludeScalarWhereInput | TourExcludeScalarWhereInput[]
    OR?: TourExcludeScalarWhereInput[]
    NOT?: TourExcludeScalarWhereInput | TourExcludeScalarWhereInput[]
    id?: StringFilter<"TourExclude"> | string
    tourId?: StringFilter<"TourExclude"> | string
    item?: StringFilter<"TourExclude"> | string
    order?: IntFilter<"TourExclude"> | number
  }

  export type TourFaqUpsertWithWhereUniqueWithoutTourInput = {
    where: TourFaqWhereUniqueInput
    update: XOR<TourFaqUpdateWithoutTourInput, TourFaqUncheckedUpdateWithoutTourInput>
    create: XOR<TourFaqCreateWithoutTourInput, TourFaqUncheckedCreateWithoutTourInput>
  }

  export type TourFaqUpdateWithWhereUniqueWithoutTourInput = {
    where: TourFaqWhereUniqueInput
    data: XOR<TourFaqUpdateWithoutTourInput, TourFaqUncheckedUpdateWithoutTourInput>
  }

  export type TourFaqUpdateManyWithWhereWithoutTourInput = {
    where: TourFaqScalarWhereInput
    data: XOR<TourFaqUpdateManyMutationInput, TourFaqUncheckedUpdateManyWithoutTourInput>
  }

  export type TourFaqScalarWhereInput = {
    AND?: TourFaqScalarWhereInput | TourFaqScalarWhereInput[]
    OR?: TourFaqScalarWhereInput[]
    NOT?: TourFaqScalarWhereInput | TourFaqScalarWhereInput[]
    id?: StringFilter<"TourFaq"> | string
    tourId?: StringFilter<"TourFaq"> | string
    question?: StringFilter<"TourFaq"> | string
    answer?: StringFilter<"TourFaq"> | string
    order?: IntFilter<"TourFaq"> | number
  }

  export type TourGalleryImageUpsertWithWhereUniqueWithoutTourInput = {
    where: TourGalleryImageWhereUniqueInput
    update: XOR<TourGalleryImageUpdateWithoutTourInput, TourGalleryImageUncheckedUpdateWithoutTourInput>
    create: XOR<TourGalleryImageCreateWithoutTourInput, TourGalleryImageUncheckedCreateWithoutTourInput>
  }

  export type TourGalleryImageUpdateWithWhereUniqueWithoutTourInput = {
    where: TourGalleryImageWhereUniqueInput
    data: XOR<TourGalleryImageUpdateWithoutTourInput, TourGalleryImageUncheckedUpdateWithoutTourInput>
  }

  export type TourGalleryImageUpdateManyWithWhereWithoutTourInput = {
    where: TourGalleryImageScalarWhereInput
    data: XOR<TourGalleryImageUpdateManyMutationInput, TourGalleryImageUncheckedUpdateManyWithoutTourInput>
  }

  export type TourGalleryImageScalarWhereInput = {
    AND?: TourGalleryImageScalarWhereInput | TourGalleryImageScalarWhereInput[]
    OR?: TourGalleryImageScalarWhereInput[]
    NOT?: TourGalleryImageScalarWhereInput | TourGalleryImageScalarWhereInput[]
    id?: StringFilter<"TourGalleryImage"> | string
    tourId?: StringFilter<"TourGalleryImage"> | string
    imageUrl?: StringFilter<"TourGalleryImage"> | string
    order?: IntFilter<"TourGalleryImage"> | number
  }

  export type TourCreateWithoutBadgesInput = {
    id?: string
    slug: string
    title: string
    category: $Enums.TourCategory
    durationDays: number
    priceFrom: number
    currency: $Enums.TourCurrency
    heroImage: string
    shortBlurb: string
    seoTitle: string
    seoDescription: string
    isPublished?: boolean
    isLandingFeatured?: boolean
    landingFeaturedOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    itinerarySteps?: TourItineraryStepCreateNestedManyWithoutTourInput
    includes?: TourIncludeCreateNestedManyWithoutTourInput
    excludes?: TourExcludeCreateNestedManyWithoutTourInput
    faqs?: TourFaqCreateNestedManyWithoutTourInput
    galleryImages?: TourGalleryImageCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutBadgesInput = {
    id?: string
    slug: string
    title: string
    category: $Enums.TourCategory
    durationDays: number
    priceFrom: number
    currency: $Enums.TourCurrency
    heroImage: string
    shortBlurb: string
    seoTitle: string
    seoDescription: string
    isPublished?: boolean
    isLandingFeatured?: boolean
    landingFeaturedOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    itinerarySteps?: TourItineraryStepUncheckedCreateNestedManyWithoutTourInput
    includes?: TourIncludeUncheckedCreateNestedManyWithoutTourInput
    excludes?: TourExcludeUncheckedCreateNestedManyWithoutTourInput
    faqs?: TourFaqUncheckedCreateNestedManyWithoutTourInput
    galleryImages?: TourGalleryImageUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutBadgesInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutBadgesInput, TourUncheckedCreateWithoutBadgesInput>
  }

  export type TourUpsertWithoutBadgesInput = {
    update: XOR<TourUpdateWithoutBadgesInput, TourUncheckedUpdateWithoutBadgesInput>
    create: XOR<TourCreateWithoutBadgesInput, TourUncheckedCreateWithoutBadgesInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutBadgesInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutBadgesInput, TourUncheckedUpdateWithoutBadgesInput>
  }

  export type TourUpdateWithoutBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTourCategoryFieldUpdateOperationsInput | $Enums.TourCategory
    durationDays?: IntFieldUpdateOperationsInput | number
    priceFrom?: IntFieldUpdateOperationsInput | number
    currency?: EnumTourCurrencyFieldUpdateOperationsInput | $Enums.TourCurrency
    heroImage?: StringFieldUpdateOperationsInput | string
    shortBlurb?: StringFieldUpdateOperationsInput | string
    seoTitle?: StringFieldUpdateOperationsInput | string
    seoDescription?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isLandingFeatured?: BoolFieldUpdateOperationsInput | boolean
    landingFeaturedOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itinerarySteps?: TourItineraryStepUpdateManyWithoutTourNestedInput
    includes?: TourIncludeUpdateManyWithoutTourNestedInput
    excludes?: TourExcludeUpdateManyWithoutTourNestedInput
    faqs?: TourFaqUpdateManyWithoutTourNestedInput
    galleryImages?: TourGalleryImageUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTourCategoryFieldUpdateOperationsInput | $Enums.TourCategory
    durationDays?: IntFieldUpdateOperationsInput | number
    priceFrom?: IntFieldUpdateOperationsInput | number
    currency?: EnumTourCurrencyFieldUpdateOperationsInput | $Enums.TourCurrency
    heroImage?: StringFieldUpdateOperationsInput | string
    shortBlurb?: StringFieldUpdateOperationsInput | string
    seoTitle?: StringFieldUpdateOperationsInput | string
    seoDescription?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isLandingFeatured?: BoolFieldUpdateOperationsInput | boolean
    landingFeaturedOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itinerarySteps?: TourItineraryStepUncheckedUpdateManyWithoutTourNestedInput
    includes?: TourIncludeUncheckedUpdateManyWithoutTourNestedInput
    excludes?: TourExcludeUncheckedUpdateManyWithoutTourNestedInput
    faqs?: TourFaqUncheckedUpdateManyWithoutTourNestedInput
    galleryImages?: TourGalleryImageUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourCreateWithoutItineraryStepsInput = {
    id?: string
    slug: string
    title: string
    category: $Enums.TourCategory
    durationDays: number
    priceFrom: number
    currency: $Enums.TourCurrency
    heroImage: string
    shortBlurb: string
    seoTitle: string
    seoDescription: string
    isPublished?: boolean
    isLandingFeatured?: boolean
    landingFeaturedOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: TourBadgeCreateNestedManyWithoutTourInput
    includes?: TourIncludeCreateNestedManyWithoutTourInput
    excludes?: TourExcludeCreateNestedManyWithoutTourInput
    faqs?: TourFaqCreateNestedManyWithoutTourInput
    galleryImages?: TourGalleryImageCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutItineraryStepsInput = {
    id?: string
    slug: string
    title: string
    category: $Enums.TourCategory
    durationDays: number
    priceFrom: number
    currency: $Enums.TourCurrency
    heroImage: string
    shortBlurb: string
    seoTitle: string
    seoDescription: string
    isPublished?: boolean
    isLandingFeatured?: boolean
    landingFeaturedOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: TourBadgeUncheckedCreateNestedManyWithoutTourInput
    includes?: TourIncludeUncheckedCreateNestedManyWithoutTourInput
    excludes?: TourExcludeUncheckedCreateNestedManyWithoutTourInput
    faqs?: TourFaqUncheckedCreateNestedManyWithoutTourInput
    galleryImages?: TourGalleryImageUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutItineraryStepsInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutItineraryStepsInput, TourUncheckedCreateWithoutItineraryStepsInput>
  }

  export type TourUpsertWithoutItineraryStepsInput = {
    update: XOR<TourUpdateWithoutItineraryStepsInput, TourUncheckedUpdateWithoutItineraryStepsInput>
    create: XOR<TourCreateWithoutItineraryStepsInput, TourUncheckedCreateWithoutItineraryStepsInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutItineraryStepsInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutItineraryStepsInput, TourUncheckedUpdateWithoutItineraryStepsInput>
  }

  export type TourUpdateWithoutItineraryStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTourCategoryFieldUpdateOperationsInput | $Enums.TourCategory
    durationDays?: IntFieldUpdateOperationsInput | number
    priceFrom?: IntFieldUpdateOperationsInput | number
    currency?: EnumTourCurrencyFieldUpdateOperationsInput | $Enums.TourCurrency
    heroImage?: StringFieldUpdateOperationsInput | string
    shortBlurb?: StringFieldUpdateOperationsInput | string
    seoTitle?: StringFieldUpdateOperationsInput | string
    seoDescription?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isLandingFeatured?: BoolFieldUpdateOperationsInput | boolean
    landingFeaturedOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: TourBadgeUpdateManyWithoutTourNestedInput
    includes?: TourIncludeUpdateManyWithoutTourNestedInput
    excludes?: TourExcludeUpdateManyWithoutTourNestedInput
    faqs?: TourFaqUpdateManyWithoutTourNestedInput
    galleryImages?: TourGalleryImageUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutItineraryStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTourCategoryFieldUpdateOperationsInput | $Enums.TourCategory
    durationDays?: IntFieldUpdateOperationsInput | number
    priceFrom?: IntFieldUpdateOperationsInput | number
    currency?: EnumTourCurrencyFieldUpdateOperationsInput | $Enums.TourCurrency
    heroImage?: StringFieldUpdateOperationsInput | string
    shortBlurb?: StringFieldUpdateOperationsInput | string
    seoTitle?: StringFieldUpdateOperationsInput | string
    seoDescription?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isLandingFeatured?: BoolFieldUpdateOperationsInput | boolean
    landingFeaturedOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: TourBadgeUncheckedUpdateManyWithoutTourNestedInput
    includes?: TourIncludeUncheckedUpdateManyWithoutTourNestedInput
    excludes?: TourExcludeUncheckedUpdateManyWithoutTourNestedInput
    faqs?: TourFaqUncheckedUpdateManyWithoutTourNestedInput
    galleryImages?: TourGalleryImageUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourCreateWithoutIncludesInput = {
    id?: string
    slug: string
    title: string
    category: $Enums.TourCategory
    durationDays: number
    priceFrom: number
    currency: $Enums.TourCurrency
    heroImage: string
    shortBlurb: string
    seoTitle: string
    seoDescription: string
    isPublished?: boolean
    isLandingFeatured?: boolean
    landingFeaturedOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: TourBadgeCreateNestedManyWithoutTourInput
    itinerarySteps?: TourItineraryStepCreateNestedManyWithoutTourInput
    excludes?: TourExcludeCreateNestedManyWithoutTourInput
    faqs?: TourFaqCreateNestedManyWithoutTourInput
    galleryImages?: TourGalleryImageCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutIncludesInput = {
    id?: string
    slug: string
    title: string
    category: $Enums.TourCategory
    durationDays: number
    priceFrom: number
    currency: $Enums.TourCurrency
    heroImage: string
    shortBlurb: string
    seoTitle: string
    seoDescription: string
    isPublished?: boolean
    isLandingFeatured?: boolean
    landingFeaturedOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: TourBadgeUncheckedCreateNestedManyWithoutTourInput
    itinerarySteps?: TourItineraryStepUncheckedCreateNestedManyWithoutTourInput
    excludes?: TourExcludeUncheckedCreateNestedManyWithoutTourInput
    faqs?: TourFaqUncheckedCreateNestedManyWithoutTourInput
    galleryImages?: TourGalleryImageUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutIncludesInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutIncludesInput, TourUncheckedCreateWithoutIncludesInput>
  }

  export type TourUpsertWithoutIncludesInput = {
    update: XOR<TourUpdateWithoutIncludesInput, TourUncheckedUpdateWithoutIncludesInput>
    create: XOR<TourCreateWithoutIncludesInput, TourUncheckedCreateWithoutIncludesInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutIncludesInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutIncludesInput, TourUncheckedUpdateWithoutIncludesInput>
  }

  export type TourUpdateWithoutIncludesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTourCategoryFieldUpdateOperationsInput | $Enums.TourCategory
    durationDays?: IntFieldUpdateOperationsInput | number
    priceFrom?: IntFieldUpdateOperationsInput | number
    currency?: EnumTourCurrencyFieldUpdateOperationsInput | $Enums.TourCurrency
    heroImage?: StringFieldUpdateOperationsInput | string
    shortBlurb?: StringFieldUpdateOperationsInput | string
    seoTitle?: StringFieldUpdateOperationsInput | string
    seoDescription?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isLandingFeatured?: BoolFieldUpdateOperationsInput | boolean
    landingFeaturedOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: TourBadgeUpdateManyWithoutTourNestedInput
    itinerarySteps?: TourItineraryStepUpdateManyWithoutTourNestedInput
    excludes?: TourExcludeUpdateManyWithoutTourNestedInput
    faqs?: TourFaqUpdateManyWithoutTourNestedInput
    galleryImages?: TourGalleryImageUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutIncludesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTourCategoryFieldUpdateOperationsInput | $Enums.TourCategory
    durationDays?: IntFieldUpdateOperationsInput | number
    priceFrom?: IntFieldUpdateOperationsInput | number
    currency?: EnumTourCurrencyFieldUpdateOperationsInput | $Enums.TourCurrency
    heroImage?: StringFieldUpdateOperationsInput | string
    shortBlurb?: StringFieldUpdateOperationsInput | string
    seoTitle?: StringFieldUpdateOperationsInput | string
    seoDescription?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isLandingFeatured?: BoolFieldUpdateOperationsInput | boolean
    landingFeaturedOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: TourBadgeUncheckedUpdateManyWithoutTourNestedInput
    itinerarySteps?: TourItineraryStepUncheckedUpdateManyWithoutTourNestedInput
    excludes?: TourExcludeUncheckedUpdateManyWithoutTourNestedInput
    faqs?: TourFaqUncheckedUpdateManyWithoutTourNestedInput
    galleryImages?: TourGalleryImageUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourCreateWithoutExcludesInput = {
    id?: string
    slug: string
    title: string
    category: $Enums.TourCategory
    durationDays: number
    priceFrom: number
    currency: $Enums.TourCurrency
    heroImage: string
    shortBlurb: string
    seoTitle: string
    seoDescription: string
    isPublished?: boolean
    isLandingFeatured?: boolean
    landingFeaturedOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: TourBadgeCreateNestedManyWithoutTourInput
    itinerarySteps?: TourItineraryStepCreateNestedManyWithoutTourInput
    includes?: TourIncludeCreateNestedManyWithoutTourInput
    faqs?: TourFaqCreateNestedManyWithoutTourInput
    galleryImages?: TourGalleryImageCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutExcludesInput = {
    id?: string
    slug: string
    title: string
    category: $Enums.TourCategory
    durationDays: number
    priceFrom: number
    currency: $Enums.TourCurrency
    heroImage: string
    shortBlurb: string
    seoTitle: string
    seoDescription: string
    isPublished?: boolean
    isLandingFeatured?: boolean
    landingFeaturedOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: TourBadgeUncheckedCreateNestedManyWithoutTourInput
    itinerarySteps?: TourItineraryStepUncheckedCreateNestedManyWithoutTourInput
    includes?: TourIncludeUncheckedCreateNestedManyWithoutTourInput
    faqs?: TourFaqUncheckedCreateNestedManyWithoutTourInput
    galleryImages?: TourGalleryImageUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutExcludesInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutExcludesInput, TourUncheckedCreateWithoutExcludesInput>
  }

  export type TourUpsertWithoutExcludesInput = {
    update: XOR<TourUpdateWithoutExcludesInput, TourUncheckedUpdateWithoutExcludesInput>
    create: XOR<TourCreateWithoutExcludesInput, TourUncheckedCreateWithoutExcludesInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutExcludesInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutExcludesInput, TourUncheckedUpdateWithoutExcludesInput>
  }

  export type TourUpdateWithoutExcludesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTourCategoryFieldUpdateOperationsInput | $Enums.TourCategory
    durationDays?: IntFieldUpdateOperationsInput | number
    priceFrom?: IntFieldUpdateOperationsInput | number
    currency?: EnumTourCurrencyFieldUpdateOperationsInput | $Enums.TourCurrency
    heroImage?: StringFieldUpdateOperationsInput | string
    shortBlurb?: StringFieldUpdateOperationsInput | string
    seoTitle?: StringFieldUpdateOperationsInput | string
    seoDescription?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isLandingFeatured?: BoolFieldUpdateOperationsInput | boolean
    landingFeaturedOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: TourBadgeUpdateManyWithoutTourNestedInput
    itinerarySteps?: TourItineraryStepUpdateManyWithoutTourNestedInput
    includes?: TourIncludeUpdateManyWithoutTourNestedInput
    faqs?: TourFaqUpdateManyWithoutTourNestedInput
    galleryImages?: TourGalleryImageUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutExcludesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTourCategoryFieldUpdateOperationsInput | $Enums.TourCategory
    durationDays?: IntFieldUpdateOperationsInput | number
    priceFrom?: IntFieldUpdateOperationsInput | number
    currency?: EnumTourCurrencyFieldUpdateOperationsInput | $Enums.TourCurrency
    heroImage?: StringFieldUpdateOperationsInput | string
    shortBlurb?: StringFieldUpdateOperationsInput | string
    seoTitle?: StringFieldUpdateOperationsInput | string
    seoDescription?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isLandingFeatured?: BoolFieldUpdateOperationsInput | boolean
    landingFeaturedOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: TourBadgeUncheckedUpdateManyWithoutTourNestedInput
    itinerarySteps?: TourItineraryStepUncheckedUpdateManyWithoutTourNestedInput
    includes?: TourIncludeUncheckedUpdateManyWithoutTourNestedInput
    faqs?: TourFaqUncheckedUpdateManyWithoutTourNestedInput
    galleryImages?: TourGalleryImageUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourCreateWithoutFaqsInput = {
    id?: string
    slug: string
    title: string
    category: $Enums.TourCategory
    durationDays: number
    priceFrom: number
    currency: $Enums.TourCurrency
    heroImage: string
    shortBlurb: string
    seoTitle: string
    seoDescription: string
    isPublished?: boolean
    isLandingFeatured?: boolean
    landingFeaturedOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: TourBadgeCreateNestedManyWithoutTourInput
    itinerarySteps?: TourItineraryStepCreateNestedManyWithoutTourInput
    includes?: TourIncludeCreateNestedManyWithoutTourInput
    excludes?: TourExcludeCreateNestedManyWithoutTourInput
    galleryImages?: TourGalleryImageCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutFaqsInput = {
    id?: string
    slug: string
    title: string
    category: $Enums.TourCategory
    durationDays: number
    priceFrom: number
    currency: $Enums.TourCurrency
    heroImage: string
    shortBlurb: string
    seoTitle: string
    seoDescription: string
    isPublished?: boolean
    isLandingFeatured?: boolean
    landingFeaturedOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: TourBadgeUncheckedCreateNestedManyWithoutTourInput
    itinerarySteps?: TourItineraryStepUncheckedCreateNestedManyWithoutTourInput
    includes?: TourIncludeUncheckedCreateNestedManyWithoutTourInput
    excludes?: TourExcludeUncheckedCreateNestedManyWithoutTourInput
    galleryImages?: TourGalleryImageUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutFaqsInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutFaqsInput, TourUncheckedCreateWithoutFaqsInput>
  }

  export type TourUpsertWithoutFaqsInput = {
    update: XOR<TourUpdateWithoutFaqsInput, TourUncheckedUpdateWithoutFaqsInput>
    create: XOR<TourCreateWithoutFaqsInput, TourUncheckedCreateWithoutFaqsInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutFaqsInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutFaqsInput, TourUncheckedUpdateWithoutFaqsInput>
  }

  export type TourUpdateWithoutFaqsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTourCategoryFieldUpdateOperationsInput | $Enums.TourCategory
    durationDays?: IntFieldUpdateOperationsInput | number
    priceFrom?: IntFieldUpdateOperationsInput | number
    currency?: EnumTourCurrencyFieldUpdateOperationsInput | $Enums.TourCurrency
    heroImage?: StringFieldUpdateOperationsInput | string
    shortBlurb?: StringFieldUpdateOperationsInput | string
    seoTitle?: StringFieldUpdateOperationsInput | string
    seoDescription?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isLandingFeatured?: BoolFieldUpdateOperationsInput | boolean
    landingFeaturedOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: TourBadgeUpdateManyWithoutTourNestedInput
    itinerarySteps?: TourItineraryStepUpdateManyWithoutTourNestedInput
    includes?: TourIncludeUpdateManyWithoutTourNestedInput
    excludes?: TourExcludeUpdateManyWithoutTourNestedInput
    galleryImages?: TourGalleryImageUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutFaqsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTourCategoryFieldUpdateOperationsInput | $Enums.TourCategory
    durationDays?: IntFieldUpdateOperationsInput | number
    priceFrom?: IntFieldUpdateOperationsInput | number
    currency?: EnumTourCurrencyFieldUpdateOperationsInput | $Enums.TourCurrency
    heroImage?: StringFieldUpdateOperationsInput | string
    shortBlurb?: StringFieldUpdateOperationsInput | string
    seoTitle?: StringFieldUpdateOperationsInput | string
    seoDescription?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isLandingFeatured?: BoolFieldUpdateOperationsInput | boolean
    landingFeaturedOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: TourBadgeUncheckedUpdateManyWithoutTourNestedInput
    itinerarySteps?: TourItineraryStepUncheckedUpdateManyWithoutTourNestedInput
    includes?: TourIncludeUncheckedUpdateManyWithoutTourNestedInput
    excludes?: TourExcludeUncheckedUpdateManyWithoutTourNestedInput
    galleryImages?: TourGalleryImageUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourCreateWithoutGalleryImagesInput = {
    id?: string
    slug: string
    title: string
    category: $Enums.TourCategory
    durationDays: number
    priceFrom: number
    currency: $Enums.TourCurrency
    heroImage: string
    shortBlurb: string
    seoTitle: string
    seoDescription: string
    isPublished?: boolean
    isLandingFeatured?: boolean
    landingFeaturedOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: TourBadgeCreateNestedManyWithoutTourInput
    itinerarySteps?: TourItineraryStepCreateNestedManyWithoutTourInput
    includes?: TourIncludeCreateNestedManyWithoutTourInput
    excludes?: TourExcludeCreateNestedManyWithoutTourInput
    faqs?: TourFaqCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutGalleryImagesInput = {
    id?: string
    slug: string
    title: string
    category: $Enums.TourCategory
    durationDays: number
    priceFrom: number
    currency: $Enums.TourCurrency
    heroImage: string
    shortBlurb: string
    seoTitle: string
    seoDescription: string
    isPublished?: boolean
    isLandingFeatured?: boolean
    landingFeaturedOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: TourBadgeUncheckedCreateNestedManyWithoutTourInput
    itinerarySteps?: TourItineraryStepUncheckedCreateNestedManyWithoutTourInput
    includes?: TourIncludeUncheckedCreateNestedManyWithoutTourInput
    excludes?: TourExcludeUncheckedCreateNestedManyWithoutTourInput
    faqs?: TourFaqUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutGalleryImagesInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutGalleryImagesInput, TourUncheckedCreateWithoutGalleryImagesInput>
  }

  export type TourUpsertWithoutGalleryImagesInput = {
    update: XOR<TourUpdateWithoutGalleryImagesInput, TourUncheckedUpdateWithoutGalleryImagesInput>
    create: XOR<TourCreateWithoutGalleryImagesInput, TourUncheckedCreateWithoutGalleryImagesInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutGalleryImagesInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutGalleryImagesInput, TourUncheckedUpdateWithoutGalleryImagesInput>
  }

  export type TourUpdateWithoutGalleryImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTourCategoryFieldUpdateOperationsInput | $Enums.TourCategory
    durationDays?: IntFieldUpdateOperationsInput | number
    priceFrom?: IntFieldUpdateOperationsInput | number
    currency?: EnumTourCurrencyFieldUpdateOperationsInput | $Enums.TourCurrency
    heroImage?: StringFieldUpdateOperationsInput | string
    shortBlurb?: StringFieldUpdateOperationsInput | string
    seoTitle?: StringFieldUpdateOperationsInput | string
    seoDescription?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isLandingFeatured?: BoolFieldUpdateOperationsInput | boolean
    landingFeaturedOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: TourBadgeUpdateManyWithoutTourNestedInput
    itinerarySteps?: TourItineraryStepUpdateManyWithoutTourNestedInput
    includes?: TourIncludeUpdateManyWithoutTourNestedInput
    excludes?: TourExcludeUpdateManyWithoutTourNestedInput
    faqs?: TourFaqUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutGalleryImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTourCategoryFieldUpdateOperationsInput | $Enums.TourCategory
    durationDays?: IntFieldUpdateOperationsInput | number
    priceFrom?: IntFieldUpdateOperationsInput | number
    currency?: EnumTourCurrencyFieldUpdateOperationsInput | $Enums.TourCurrency
    heroImage?: StringFieldUpdateOperationsInput | string
    shortBlurb?: StringFieldUpdateOperationsInput | string
    seoTitle?: StringFieldUpdateOperationsInput | string
    seoDescription?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isLandingFeatured?: BoolFieldUpdateOperationsInput | boolean
    landingFeaturedOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: TourBadgeUncheckedUpdateManyWithoutTourNestedInput
    itinerarySteps?: TourItineraryStepUncheckedUpdateManyWithoutTourNestedInput
    includes?: TourIncludeUncheckedUpdateManyWithoutTourNestedInput
    excludes?: TourExcludeUncheckedUpdateManyWithoutTourNestedInput
    faqs?: TourFaqUncheckedUpdateManyWithoutTourNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type PostCreateManyCreatedByInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsSectionCreateManyUpdatedByInput = {
    id?: string
    key: string
    data: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsSectionUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsSectionUncheckedUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsSectionUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourBadgeCreateManyTourInput = {
    id?: string
    label: string
    order: number
  }

  export type TourItineraryStepCreateManyTourInput = {
    id?: string
    day: string
    title: string
    description: string
    order: number
  }

  export type TourIncludeCreateManyTourInput = {
    id?: string
    item: string
    order: number
  }

  export type TourExcludeCreateManyTourInput = {
    id?: string
    item: string
    order: number
  }

  export type TourFaqCreateManyTourInput = {
    id?: string
    question: string
    answer: string
    order: number
  }

  export type TourGalleryImageCreateManyTourInput = {
    id?: string
    imageUrl: string
    order: number
  }

  export type TourBadgeUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourBadgeUncheckedUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourBadgeUncheckedUpdateManyWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourItineraryStepUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourItineraryStepUncheckedUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourItineraryStepUncheckedUpdateManyWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourIncludeUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourIncludeUncheckedUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourIncludeUncheckedUpdateManyWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourExcludeUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourExcludeUncheckedUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourExcludeUncheckedUpdateManyWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourFaqUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourFaqUncheckedUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourFaqUncheckedUpdateManyWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourGalleryImageUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourGalleryImageUncheckedUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TourGalleryImageUncheckedUpdateManyWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}